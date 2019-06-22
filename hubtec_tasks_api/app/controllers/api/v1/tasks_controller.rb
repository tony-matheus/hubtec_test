module Api::V1
  class TasksController < Api::ApiController
    before_action :authenticate_user!
    before_action :set_task, only: %i[update destroy delete]
    before_action :set_task_destroyed, only: :recycle

    def index
      render json: Task.find_user_tasks(current_user.id)
    end

    def create
      @task = Task.new(task_params)
      @task.user_id = current_user.id
      if @task.save
        render json: @task
      else
        render json: @task.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      if @task.update(task_params)
        render json: @task
      else
        render json: @task.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      if @task.soft_delete
        render json: :destroyed
      else
        render json: @task.errors.full_messages, status: :unprocessable_entity
      end
    end

    def delete
      if @task.destroy
        render json: :destroyed
      else
        render json: @task.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroyed
      render json: Task.find_deleted_tasks(current_user.id)
    end

    def recycle
      if @task.recycle
        render json: :recycle
      else
        render json: @task.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def set_task
      @task = Task.find(params[:id])
    end

    def set_task_destroyed
      @task = Task.unscoped.find(params[:id])
    end

    def task_params
      params.require(:task).permit(:name, :description, :end_time, :status)
    end
  end
end
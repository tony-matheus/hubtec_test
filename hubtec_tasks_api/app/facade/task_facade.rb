# frozen_string_literal: true

  class TaskFacade
    attr_reader :current_user

    def initialize current_user
      @current_user = current_user
    end

    def find_user_tasks
      {
        to_do: find_to_do(),
        in_progress: find_in_progress(),
        done: find_done()
      }
    end

    def find_to_do
      Task.where('status = ? AND user_id = ?', 0, @current_user)
    end

    def find_in_progress
      Task.where('status = ? AND user_id = ?', 1, @current_user)
    end

    def find_done
      Task.where('status = ? AND user_id = ?', 2, @current_user)
    end

    def find_deleted_tasks
      Task.find_deleted_tasks(@current_user)
    end

    private

    def active_users
      User.active
    end
  end

require 'rails_helper'

RSpec.describe 'Api V1 Task Requests', type: :request do
  let(:valid_params) { attributes_for(:task) }
  before(:each) do
    @user = create(:user)
    post '/auth/sign_in', params: {
        email: @user.email,
        password: @user.password
    }
    @headers = {
        "client": response.header["client"],
        "uid": response.header["uid"],
        "access-token": response.header["access-token"]
    }
  end

  describe 'GET /api/v1/task' do
    it 'should success' do
      get '/api/v1/tasks', headers: @headers
      expect(response).to have_http_status(200)
    end


    it 'should return an json hash' do
      get '/api/v1/tasks', headers: @headers
      expect(JSON.parse(response.body)).to respond_to(:hash)
    end
  end

  describe 'POST /api/v1/task' do
    before(:each) do
      post '/api/v1/tasks', headers: @headers, params: { task: valid_params }
    end
    it 'should create task' do
      expect(response).to be_successful
    end

    it 'should return created task' do
      parsed_response = JSON.parse(response.body)
      expect(parsed_response['name']).to be === valid_params[:name]
      expect(parsed_response['description']).to be === valid_params[:description]
    end
  end

  describe 'PUT /api/v1/tasks/:id' do
    let(:task) { create(:task, :with_user) }
    let(:attr) {attributes_for(:task)}

    before(:each) do
      put "/api/v1/tasks/#{task.id}" , headers: @headers, params: {task: attr}
      task.reload
    end


    it 'should success' do
      expect(response).to have_http_status(200)
    end

    it 'attributes' do
      attr.each do |key, value|
        expect(task[key]).to eq(attr[key])
      end
    end
  end

  describe 'DELETE /api/v1/tasks/:id' do
    before(:each) do
      tasks = create_list(:task, 5, user_id: @user.id)
      delete "/api/v1/tasks/#{tasks.first.id}", headers: @headers
    end

    it 'should success' do
      expect(response).to have_http_status(200)
      expect(response.body).to include"destroyed"
    end

    it 'should soft delete the task' do
      tasks = Task.all
      expect(tasks.length).to be == 4
    end

    it "should soft delete the task but the task must exist" do
      tasks = Task.unscoped.all
      expect(tasks.length).to be == 5
    end
  end

  describe 'GET /api/v1/tasks/:id/recycle' do
    before(:each) do
      tasks = create_list(:task, 5, user_id: @user.id)
      tasks.first.soft_delete
      get "/api/v1/tasks/#{tasks.first.id}/recycle", headers: @headers
    end

    it 'should success' do
      expect(response).to have_http_status(200)
    end

    it 'should recycle the deleted task' do
      tasks = Task.all
      expect(tasks.length).to be == 5
    end

    it 'should return recycle text' do
      expect(response.body).to include("recycle")
    end
  end

  describe 'GET /api/v1/tasks/destroyed' do
    before(:each) do
      tasks = create_list(:task, 5, user_id: @user.id)
      tasks.each do |task|
        task.soft_delete
      end
      get "/api/v1/tasks/destroyed", headers: @headers
    end

    it 'should success' do
      expect(response).to have_http_status(200)
    end

    it 'should return all deleted tasks' do
      parsed_response = JSON.parse(response.body)
      expect(parsed_response.length).to be == 5
    end
  end

  describe 'DELETE /api/v1/tasks/delete' do
    before(:each) do
      tasks = create_list(:task, 5, user_id: @user.id)
      delete "/api/v1/tasks/#{tasks.first.id}/delete", headers: @headers
    end

    it 'should success' do
      expect(response).to have_http_status(200)
      expect(response.body).to include"destroyed"
    end

    it 'should delete the task' do
      tasks = Task.all
      expect(tasks.length).to be == 4
    end

    it "should delete the task but the task must not exist in unscoped" do
      tasks = Task.unscoped.all
      expect(tasks.length).to be == 4
    end
  end

end
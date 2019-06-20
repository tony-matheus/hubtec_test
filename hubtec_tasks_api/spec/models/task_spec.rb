require 'rails_helper'

RSpec.describe Task, type: :model do
  let!(:task) { build(:task, :with_user) }

  describe "Associations" do
    it { should belong_to :user}
  end

  describe 'Validations' do
    validations = %w[description name end_time status]
    validations.each do |field|
      it { should validate_presence_of(field) }
    end

    context 'associated models' do
      it 'is valid with associated model' do
        expect(task).to be_valid
      end
    end
  end

  describe 'Self Methods' do
    context '#self.find_user_task' do
      before(:each) do
        @user_id = create(:user).id
        create_list(:task, 2, :to_do, user_id: @user_id)
        create_list(:task, 2, :in_progress, user_id: @user_id)
        create_list(:task, 2, :done, user_id: @user_id)
        @tasks = Task.find_user_tasks(@user_id)
      end
      it 'should return tasks with all status' do
        expect(@tasks.length).to be == 3
      end

      it 'should return all tasks with status to do' do
        expect(@tasks[:to_do].length).to be == 2
      end

      it 'should return all tasks with status to do' do
        expect(@tasks[:in_progress].length).to be == 2
      end

      it 'should return all tasks with status to do' do
        expect(@tasks[:done].length).to be == 2
      end
    end

    context '#self.find_to_do' do
      before(:each) do
        @user_id = create(:user).id
        create_list(:task, 2, :to_do, user_id: @user_id)
        @tasks = Task.find_to_do(@user_id)
      end

      it 'should return all tasks with status to do' do
        expect(@tasks.length).to be == 2
      end
    end

    context '#self.find_in_progress' do
      before(:each) do
        @user_id = create(:user).id
        create_list(:task, 2, :in_progress, user_id: @user_id)
        @tasks = Task.find_in_progress(@user_id)
      end

      it 'should return all tasks with status in progress' do
        expect(@tasks.length).to be == 2
      end
    end

    context '#self.find_done' do
      before(:each) do
        @user_id = create(:user).id
        create_list(:task, 2, :done, user_id: @user_id)
        @tasks = Task.find_done(@user_id)
      end

      it 'should return all tasks with status done' do
        expect(@tasks.length).to be == 2
      end
    end
  end

end

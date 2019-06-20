class Task < ApplicationRecord
  belongs_to :user

  before_validation :set_status, on: :create
  validates :description, :name, :end_time, :status, presence: true

  default_scope -> { where(deleted_at: nil) }

  enum status: %i[to_do in_progress done]

  def soft_delete
    update(deleted_at: Time.current) if self.deleted_at.nil?
  end

  def self.find_user_tasks(user_id)
    {
        to_do: self.find_to_do(user_id),
        in_progress: self.find_in_progress(user_id),
        done: self.find_done(user_id)
    }
  end

  def self.find_to_do(user_id)
    self.where('status = ? AND user_id = ?', 0, user_id)
  end

  def self.find_in_progress(user_id)
    self.where('status = ? AND user_id = ?', 1, user_id)
  end

  def self.find_done(user_id)
    self.where('status = ? AND user_id = ?', 2, user_id)
  end

  private

  def set_status
    self.status = :to_do if self.status.nil?
  end

end
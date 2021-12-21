class AddIndexToCompanies < ActiveRecord::Migration[6.1]
  def change
    add_index :companies, [:cusip, :symbol], unique: true
  end
end

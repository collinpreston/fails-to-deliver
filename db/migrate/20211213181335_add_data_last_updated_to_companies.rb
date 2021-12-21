class AddDataLastUpdatedToCompanies < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :data_last_updated, :string
  end
end

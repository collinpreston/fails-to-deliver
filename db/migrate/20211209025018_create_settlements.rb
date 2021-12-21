class CreateSettlements < ActiveRecord::Migration[6.1]
  def change
    create_table :settlements do |t|
      t.text :settlement_date
      t.integer :quantity
      t.decimal :price

      t.timestamps
    end
  end
end

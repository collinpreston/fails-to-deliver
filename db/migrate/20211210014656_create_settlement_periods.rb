class CreateSettlementPeriods < ActiveRecord::Migration[6.1]
  def change
    create_table :settlement_periods do |t|
      t.string :month

      t.timestamps
    end
  end
end

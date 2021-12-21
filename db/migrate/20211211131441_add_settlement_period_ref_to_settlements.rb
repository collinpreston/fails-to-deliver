class AddSettlementPeriodRefToSettlements < ActiveRecord::Migration[6.1]
  def change
    add_reference :settlements, :settlement_period, null: false, foreign_key: true
    add_reference :settlements, :company, null: false, foreign_key: true
  end
end

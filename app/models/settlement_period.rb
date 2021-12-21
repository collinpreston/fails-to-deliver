class SettlementPeriod < ApplicationRecord
    has_many :settlements
    validates_uniqueness_of :month
end

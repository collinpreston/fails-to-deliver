class Company < ApplicationRecord
    has_many :settlements, foreign_key: "company_id", class_name: "Settlement"
    has_many :settlement_periods, through: :settlements
    validates_uniqueness_of :symbol
end

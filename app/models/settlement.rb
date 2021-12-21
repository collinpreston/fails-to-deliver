class Settlement < ApplicationRecord
    belongs_to :settlement_period
    has_one :company, through: :settlement_period
end

class ApiKey < ApplicationRecord
    validates_uniqueness_of :key
end

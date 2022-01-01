class CompanyTopTenSerializer < ActiveModel::Serializer
  attributes :id, :symbol, :quantity
end

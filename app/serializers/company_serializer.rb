class CompanySerializer < ActiveModel::Serializer
  attributes :id, :data_last_updated
  has_many :settlements, id_method_name: :company_id
end

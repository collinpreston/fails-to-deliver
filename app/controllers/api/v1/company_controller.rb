class Api::V1::CompanyController < ApplicationController
  require 'json'
  include Authenticable

  def index
    verify_api_token!
    companies_arr = ::Company.pluck(:id, :symbol, :description)
    companies_hash = companies_arr.map { |company| { id: company.first, symbol: company.second, name: company.third }}
    render json: companies_hash.to_json, status: :ok
  end

  def show
    verify_api_token!
    company = ::Company.find(params[:id])
    render json: CompanySerializer.new(company).serializable_hash, status: :ok
  end

end

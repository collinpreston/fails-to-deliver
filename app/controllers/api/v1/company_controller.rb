class Api::V1::CompanyController < ApiController
  require 'json'

  def index
    companies_arr = ::Company.pluck(:id, :symbol, :description)
    companies_hash = companies_arr.map { |company| { id: company.first, symbol: company.second, name: company.third }}
    render json: companies_hash.to_json, status: :ok
  end

  def show_by_id
    company = ::Company.find(params[:id])
    render json: CompanySerializer.new(company).serializable_hash, status: :ok
  end

  def show_by_symbol
    company = ::Company.find_by(symbol: params[:id].upcase)
    render json: CompanySerializer.new(company).serializable_hash, status: :ok
  end

  def show_top_ten_by_volume
    companies_arr = Company.joins(:settlements).group('companies.id').select('SUM(settlements.quantity) as quantity', 'companies.symbol as symbol', 'companies.id as id').order('quantity desc').first(10)
    companies_hash = companies_arr.map { |company| { id: company.id, symbol: company.symbol, quantity: company.quantity }}
    render json: companies_hash.to_json, status: :ok
  end

end

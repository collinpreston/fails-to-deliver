class Api::V1::SettlementResourceController < ApiController
  include Authenticable

  def create
    verify_api_token!
    SettlementResources.new(params).create
    render status: :ok
  end

end

class Api::V1::SettlementResourceController < ApiController
  include Authenticable

  def create
    verify_api_token!
    ::SettlementResources.new(params).create
    render plain: {message: 'all good.'}.to_json, status: :ok, content_type: 'application/json'
  end

end

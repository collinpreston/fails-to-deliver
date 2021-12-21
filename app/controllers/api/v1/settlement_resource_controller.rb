class Api::V1::SettlementResourceController < ApplicationController

  def create
    SettlementResources.new(params).create
    render status: :ok
  end

end

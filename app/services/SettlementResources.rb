require 'date'
class SettlementResources

    attr_accessor :settlement_resources

    def initialize(params)
        @settlement_resources = params[:settlementResources]
    end

    def create
        time = Time.new
        @settlement_resources.each do |settlement|
            date = Date.parse(settlement[:settlementDate])
            settlement_period = SettlementPeriod.find_or_create_by!(month: date.month)
            company = Company.create_with(description: settlement[:description], data_last_updated: Time.now, cusip: settlement[:cusip]).find_or_create_by!(symbol: settlement[:symbol])
            Settlement.create!(settlement_date: settlement[:settlementDate], quantity: settlement[:quantity], price: settlement[:price], settlement_period_id: settlement_period.id, company_id: company.id)
        end
    end
end

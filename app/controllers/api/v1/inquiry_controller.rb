class Api::V1::InquiryController < ApiController
  
    def create
        InquiryMailer.with(inquiry: params[:inquiry][:message], email: params[:email][:email]).inquiry_email.deliver_later
        render status: :ok
    end
  
  end
  
class Api::V1::InquiryController < ApiController
  
    def create
        InquiryMailer.with(inquiry: params[:inquiry][:message], email: params[:email][:email]).inquiry_email.deliver_later
        render plain: {message: 'message sent'}.to_json, status: :ok, content_type: 'application/json'
    end
  
  end
  
class InquiryMailer < ApplicationMailer
    default from: 'inquiries@failsdata.com'

    def inquiry_email
        @inquiry = params[:inquiry]
        @email = params[:email]
        mail(to: 'collin_preston@yahoo.com', subject: 'failsdata inquiry')
    end
end

module Authenticable
    extend ActiveSupport::Concern
    include AbstractController::Rendering

    module Exceptions
        class AccessDenied < StandardError; end
    end

    included do
        rescue_from Exceptions::AccessDenied, with: :forbidden_response
    end

    def verify_api_token!
        raise Exceptions::AccessDenied unless ApiKey.exists?(key: request.headers['key'])
    end


    private

    def forbidden_response
        render json: { errors: [
            {
                status: '403',
                title: 'Forbidden',
                detail: 'Access the requested endpoint is restricted.'
            }
        ]}, status: :forbidden
    end

end

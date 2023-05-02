class Api::GreetingsController < ApplicationController
    def random_greeting
        random_message = Greeting.order("RANDOM()").first.message
        render json: { message: random_message }
    end
end

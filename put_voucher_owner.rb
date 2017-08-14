require 'uri'
require 'net/http'

url = URI("https://www.givve.com/api/vouchers/55ae066c617070374dee0100/owners/55ae066c617070374def0100")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Put.new(url)
request["accept-version"] = 'v2'
request["authorization"] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ODZlNWM1NDM4Zjg4NDMyNzk0NjBlMDgiLCJleHAiOjE1MDI3MDk2NTIsImFjY2Vzc29yX3R5cGUiOiJjdXN0b21lciJ9.JQVNzi5772UB56PK_KU2lNsKDbXPc1KX7VQi_A3A0ik'
request.body= URI.encode_www_form({"first_name" => "Michael", "last_name" => "Kwidzinski"})

response = http.request(request)
puts response.read_body

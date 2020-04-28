class HealthCheckRoutes {
    public static handler = async (event: any, context: any) => {

        let response: any;
        switch (event.httpMethod) {                                                                                 // Routing
            case "GET":                                                                                             // Handle GET method
                switch (event.path) {
                    case "/health-check":
                        response = {
                            message: 'Health Check for Product Service',
                            event
                        };
                        break;
                    default:
                        throw new Error('Unknown path');
                }
                break;
            default:
                throw new Error('Unknown path');
        }
        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    }
}

module.exports.handler = HealthCheckRoutes.handler ;
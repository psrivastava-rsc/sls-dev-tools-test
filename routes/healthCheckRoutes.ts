class HealthCheckRoutes {
    public static handler = async (event: any, context: any) => {

        const response: any = { message: 'Health Check for Product Service', event};
                        
        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    }
}

module.exports.handler = HealthCheckRoutes.handler ;
namespace T_rex.Backend.Utils.WS;

public class Middleware
{
    public Middleware(RequestDelegate next)
    {
        _next = next;
    }

    private RequestDelegate _next;

    public async Task Invoke(HttpContext httpContext, Manager manager)
    {
        // try connect WS
        var wsLoop = await manager.TryConnectWS(httpContext);

        // await WS or HTTP
        await (wsLoop ?? _next.Invoke(httpContext));
    }
}

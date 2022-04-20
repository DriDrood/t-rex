namespace T_rex.Backend;
public static class ServiceProviderExtension
{
    public static T Get<T>(this IServiceProvider self)
    {
        T service = self.GetService<T>()
            ?? throw new Exception("");

        return service;
    }

}
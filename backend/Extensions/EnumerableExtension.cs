namespace T_rex.Backend;
public static class EnumerableExtension
{
    public static T RandomItem<T>(this IEnumerable<T> self)
    {
        Random random = new Random();
        int index = random.Next(self.Count());
        return self.ElementAt(index);
    }

}
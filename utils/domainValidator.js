const domainProperties = [
    {
        name: 'domain',
        validator: /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/,
        warning: 'Invalid domain, please input domain like google.com'
    }
];

export default domainProperties;
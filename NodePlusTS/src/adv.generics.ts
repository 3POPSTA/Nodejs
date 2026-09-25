// Generic function with constraints
function getProperty<T,K extends keyof T>(obj:T, key:K): T[K]{
    return obj[key];
}

// Generic interface with default type
interface PaginatedResponse<T = any > {
    data: T[];
    total: number;
    page: number;
    limit: number;
}
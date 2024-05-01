export declare enum Method {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH"
}
export declare enum ResourceType {
    xhr = "xhr",
    fetch = "fetch",
    doc = "document"
}
export interface Filter {
    methods?: Method[];
    resourceType?: ResourceType;
    url?: string;
}

type mDNSDiscoverProps = {
    /**
     * The TCP service to discover by name
     */
    tcp_service: string;
    /**
     * How long to wait for responses in milliseconds
     * @default 5000
     */
    timeout?: number;
};
/**
 * Creates an new mDNS browser to discover services and devices on the network
 *
 * @param options - The options to use when discovering services
 * @returns An array of objects representing the discovered services
 */
declare function mDNSDiscover(options: mDNSDiscoverProps): Promise<{
    addresses: string[];
    fullname: string;
    host: string;
    interfaceIndex: number;
    port: number;
    query: string[];
    txt: string[];
    type: {
        name: string;
        protocol: string;
        subtypes: string[];
    }[];
}[]>;

export { mDNSDiscover };

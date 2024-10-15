
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
export async function mDNSDiscover(options: mDNSDiscoverProps) {
    const { tcp_service, timeout = 5000 } = options;
    return __PLUGINSYS__.IZAPI.mDNS.createBrowser(tcp_service, timeout);
}

async function mDNSDiscover(options) {
  const { tcp_service, timeout = 5e3 } = options;
  return __PLUGINSYS__.IZAPI.mDNS.createBrowser(tcp_service, timeout);
}

export { mDNSDiscover };

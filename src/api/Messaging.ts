import { onUnmounted } from 'vue'

/**
 * Direct access to the external messaging system.
 * 
 * This is a direct reference to the external messaging system, which allows you to send and receive messages from other plugins, the main application, or external sources.
 * 
 * @example
 * ```ts
 * ExternalMessages.addEventListener('my-identifier:my-event', (e) => {
 *   console.log('Event triggered!', e)
 * })
 * ```
 */
export const ExternalMessages = __PLUGINSYS__.ExternalMessages

/**
 * Message listener composable
 * 
 * This composable allows you to listen for messages sent from other plugins, the main application, or external sources.
 * 
 * Will automatically remove the event listener when the component is unmounted.
 * 
 * @param eventName The name of the event to listen for.
 * @param callback The callback to run when the event is triggered.
 * @param opts Options for the event listener.
 * 
 * @returns A function to remove the event listener.
 * 
 * @example
 * ```ts
 * const removeListener = useMessageListener('my-identifier:my-event', (e) => {
 *    console.log('Event triggered!', e)
 * })
 * ```
 */
export function useMessageListener(eventName: string, callback: (e: any) => void, opts?: Partial<{ once: boolean, passive: boolean, capture: boolean }>) {
    ExternalMessages.addEventListener(eventName, callback, opts)

    function removeListener() {
        ExternalMessages.removeEventListener(eventName, callback)
    }

    onUnmounted(() => {
        removeListener()
    })

    return removeListener
}

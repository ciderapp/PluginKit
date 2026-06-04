
declare namespace MusicKit {
    /**
     * An event data provider for a concert.
     */
    interface EventDataProvider {
        /**
         * The URL of the event data provider.
         */
        url: string;
        /**
         * The name of the event data provider.
         */
        name: string;
    }

    /**
     * A ticket provider for a concert.
     */
    interface TicketProvider {
        /**
         * The URL of the ticket provider.
         */
        url: string;
        /**
         * The name of the ticket provider.
         */
        name: string;
    }

    /**
     * A ticket for a concert.
     */
    interface Ticket {
        /**
         * The provider information for the ticket.
         */
        provider: TicketProvider;
        /**
         * The vendor selling the ticket.
         */
        vendor: string;
        /**
         * The URL to purchase the ticket.
         */
        url: string;
    }

    /**
     * A structured address for a venue.
     */
    interface StructuredAddress {
        /**
         * The street address.
         */
        address: string;
        /**
         * The city.
         */
        city: string;
        /**
         * The country.
         */
        country: string;
        /**
         * The ISO country code.
         */
        countryIsoCode: string;
        /**
         * The postal code.
         */
        postCode: string;
        /**
         * The region or state.
         */
        region: string | null;
    }

    /**
     * Geographic location coordinates.
     */
    interface GeoLocation {
        /**
         * The latitude.
         */
        latitude: number;
        /**
         * The longitude.
         */
        longitude: number;
    }

    /**
     * A concert resource.
     */
    type Concerts = Resource & {
        type: "concerts";
        attributes?: {
            /**
             * The end date and time of the concert in ISO 8601 format.
             */
            endISODateTime: string;
            /**
             * The event data providers for the concert.
             */
            eventDataProviders: EventDataProvider[];
            /**
             * The name of the concert.
             */
            name: string;
            /**
             * The start date and time of the concert in ISO 8601 format.
             */
            startISODateTime: string;
            /**
             * The tickets available for the concert.
             */
            tickets: Ticket[];
            /**
             * The timezone of the concert.
             */
            timezone: string;
            /**
             * The URL of the concert on Apple Music.
             */
            url: string;
        };
        relationships: {
            /**
             * The artists performing at the concert.
             */
            artists: Relationship<Artists>;
            /**
             * The playlists associated with the concert.
             */
            playlists: Relationship<Playlists>;
            /**
             * The venues where the concert is taking place.
             */
            venues: Relationship<Venues>;
        };
        views?: {
            /**
             * More upcoming concerts view.
             */
            "more-upcoming-concerts"?: View<Concerts>;
        };
    };

    /**
     * A venue resource.
     */
    type Venues = Resource & {
        type: "venues";
        attributes?: {
            /**
             * The geographic location of the venue.
             */
            geoLocation: GeoLocation;
            /**
             * The name of the venue.
             */
            name: string;
            /**
             * The structured address of the venue.
             */
            structuredAddress: StructuredAddress;
        };
    };

    /**
     * A response containing concert data and related resources.
     */
    interface ConcertResponse {
        /**
         * The primary concert data.
         */
        data: Array<{
            id: string;
            type: "concerts";
            href: string;
        }>;
        /**
         * Related resources keyed by type and ID.
         */
        resources: {
            artists?: { [id: string]: Artists };
            concerts?: { [id: string]: Concerts };
            stations?: { [id: string]: Stations };
            venues?: { [id: string]: Venues };
        };
    }
}
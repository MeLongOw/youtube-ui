import config from '~/config';
import HeaderOnly from '~/layouts/HeaderOnly';
import Account from '~/pages/Account';
import Channel from '~/pages/Channel';
import Creators from '~/pages/Creators';
import History from '~/pages/Feed/History';
import Library from '~/pages/Feed/Library';
import Subscriptions from '~/pages/Feed/Subscriptions';
import Trending from '~/pages/Feed/Trending';
import Gaming from '~/pages/Gaming';
import Home from '~/pages/Home';
import Playlist from '~/pages/Playlist';
import Policy from '~/pages/Policy';
import Profile from '~/pages/Profile';
import ReportHistory from '~/pages/ReportHistory';
import Shorts from '~/pages/Shorts';
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },

    {
        path: config.routes.shorts,
        component: Shorts,
    },

    {
        path: config.routes.feed.history,
        component: History,
    },
    {
        path: config.routes.feed.library,
        component: Library,
    },
    {
        path: config.routes.feed.subcriptions,
        component: Subscriptions,
    },
    {
        path: config.routes.feed.trending,
        component: Trending,
    },
    {
        path: config.routes.playlist,
        component: Playlist,
    },

    {
        path: config.routes.profile,
        component: Profile,
    },

    {
        path: config.routes.channel,
        component: Channel,
    },
    {
        path: config.routes.creators,
        component: Creators,
    },
    {
        path: config.routes.gaming,
        component: Gaming,
    },

    {
        path: config.routes.reportHistory,
        component: ReportHistory,
    },

    {
        path: config.routes.account,
        component: Account,
    },

    {
        path: config.routes.feed.trending,
        component: Trending,
    },
    {
        path: config.routes.policy,
        component: Policy,
        layout: HeaderOnly,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };

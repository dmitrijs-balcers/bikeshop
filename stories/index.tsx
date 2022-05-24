import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

import storyStyles from "./Story.module.css";

const root = document.getElementById("root");

const stories = {
    Card: React.lazy(() => import("../src/components/Card/Card.story")),
    Basket: React.lazy(() => import("../src/components/Basket/Basket.story")),
    "Whole App": React.lazy(() => import("../src/components/App.story")),
};

const storiesNames = Object.keys(stories);

export function Stories() {
    const [selectedStory, setSelectedStory] = React.useState<string | null>(
        null,
    );

    const [isFullscreen, setIsFullscreen] = React.useState(false);

    const syncWithLocationParams = React.useCallback(() => {
        const { story, fullscreen } = getLocationParams();

        if (story && story in stories) {
            setSelectedStory(story);
        }
        if (fullscreen && ["true", "false"].includes(fullscreen)) {
            setIsFullscreen(fullscreen === "true");
        }
    }, []);

    React.useLayoutEffect(() => {
        syncWithLocationParams();
    }, []);

    React.useEffect(() => (window.onpopstate = syncWithLocationParams), []);

    React.useEffect(() => {
        if (selectedStory) {
            setLocationParams("story", encodeURIComponent(selectedStory));
        }

        setLocationParams("fullscreen", String(isFullscreen));
    }, [selectedStory, isFullscreen]);

    const SelectedStoryComponent =
        stories[selectedStory as keyof typeof stories];

    if (isFullscreen) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <SelectedStoryComponent />
            </Suspense>
        );
    }

    return (
        <main className={storyStyles.container}>
            <div className={storyStyles.navBar}>
                <a
                    href=""
                    onClick={(e) => {
                        e.preventDefault();
                        setIsFullscreen(!isFullscreen);
                    }}
                >
                    Go FullScreen
                </a>
                {storiesNames.map((name) => (
                    <button
                        className={storyStyles.button}
                        key={name}
                        onClick={() => setSelectedStory(name)}
                    >
                        {name}
                    </button>
                ))}
            </div>
            <div className={storyStyles.storyContainer}>
                {selectedStory && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <SelectedStoryComponent />
                    </Suspense>
                )}
            </div>
        </main>
    );
}

const getLocationParams = () => {
    const params = new URLSearchParams(window.location.search);
    const story = params.get("story");
    const fullscreen = params.get("fullscreen");

    return {
        story: story && decodeURIComponent(story),
        fullscreen: fullscreen && decodeURIComponent(fullscreen),
    };
};

function setLocationParams(key: string, value: string) {
    const { search, protocol, host, pathname } = window.location;
    const params = new URLSearchParams(search);
    if (params.get(key) === value) {
        return;
    }

    params.set(key, value);
    const newUrl = `${protocol}//${host}${pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
}

if (!root) {
    console.error("Root el not found!");
} else {
    createRoot(root).render(<Stories />);
}

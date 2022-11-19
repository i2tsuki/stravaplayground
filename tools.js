#/usr/bin/env node

// Kudo all displayed activities in your feed
document.querySelectorAll('[data-testid="kudos_button"]').forEach(function(node) {node.click()});

// Get activities ID in your feed
function getActivityIDs() {
    let activities = [];
    document.querySelectorAll('[data-testid="activity_name"]').forEach(function(node) {activities.push(node.getAttribute("href").replace("/activities/", ""))});
    console.log(activities);
}

// Remove activities that you've already kudo
function removeKudoEntries() {
    document.querySelectorAll("div[class^='_-_-packages-feed-ui-src-features-FeedEntry__entry-container--']").forEach(function(node) {
        let kudoButton = node.querySelector('[data-testid="filled_kudos"]');
        if (kudoButton) {
         node.remove();   
        }
    });
};
removeKudoEntries();


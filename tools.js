#/usr/bin/env node

// Kudo all displayed activities in your feed
document.querySelectorAll('[data-testid="kudos_button"]').forEach(function(node) {node.click()});

// Get activities ID in your feed
function getActivityIDs() {
    let activities = [];
    document.querySelectorAll('[data-testid="activity_name"]').forEach(function(node) {activities.push(node.getAttribute("href").replace("/activities/", ""))});
    console.log(activities);
}

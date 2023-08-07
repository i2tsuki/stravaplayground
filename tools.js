#!/usr/bin/env node

// Kudo all displayed activities in your feed
document.querySelectorAll('[data-testid="kudos_button"]').forEach(function(node) {node.click()});

// Get activities ID in your feed
function getActivityIDs() {
    let activities = [];
    document.querySelectorAll('[data-testid="activity_name"]').forEach(function(node) {activities.push(node.getAttribute("href").replace("/activities/", ""))});
    console.log(activities);
};

// Remove activities that you've already kudo
function removeKudoEntries() {
    document.querySelectorAll("div[data-testid='web-feed-entry']").forEach(function(node) {
        let kudoButton = node.querySelector('[data-testid="filled_kudos"]');
        if (kudoButton) {
         node.remove();   
        }
    });
};

// Filter athlete join entries in your feed
function removeAthleteJoinEntries() {
    document.querySelectorAll("div[data-testid='web-feed-entry']").forEach(function(node) {
        let isAthleteJoin = node.querySelector("div[class^='_-_-packages-feed-ui-src-components-media-Media-Media__media--vJldK _-_-packages-feed-ui-src-components-AthleteJoinEntry-AthleteJoinEntry__media']");
        if (isAthleteJoin) {
            node.remove();
        }
    });
};

// Filter yourself entries in your feed
let athleteId = "";
function removeYourselfEntries() {
    document.querySelectorAll("div[data-testid='web-feed-entry']").forEach(function(node) {
        let yourself = document.querySelector("[data-testid='owner-avatar']").getAttribute("href").includes(athleteId);
        if (yourself) {
            node.remove();
        }
    });
};

removeKudoEntries(); removeAthleteJoinEntries(); removeYourselfEntries();

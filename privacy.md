---
title: Privacy Policy
---

# Privacy Policy

**Last updated: October 15, 2026**

<!-- DRAFT 2026-10-15 for Muxivo 1.1 with Report a Problem sent through Apple
     CloudKit (docs/PRIVACY-POLICY-REPORTS.md). The owner approves the wording,
     fills the date, then this file replaces privacy.md in the public
     JosueC33/muxivo-site repo. Publish BEFORE the CloudKit build is released.
     Not included on purpose (not switched on in 1.1): weekly library
     patterns and over-the-air library improvements; their drafts live in
     docs/PRIVACY-POLICY-REPORTS.md. -->

Muxivo has no accounts, no analytics, no advertising and no tracking, and it
does not sell or share personal information. Nothing about you or your library
reaches us unless you choose to send a report, after reading exactly what it
contains (below).

## What stays on your device

Muxivo reads video files you choose and plays them. The following stay on your
own Mac, iPhone or iPad and are never sent to us:

- The folders you add to your library, and the list of video files found in them
- Playback positions, watched state, and which audio or subtitle track you last
  chose for a file
- Poster images extracted from your own video files
- Temporary converted copies of files being played, which are deleted
  automatically

## When Muxivo uses the network

**Streaming to your TV.** When you send video to an AirPlay receiver, Muxivo
runs a small web server on your local network so the TV can fetch the video
directly from your Mac, iPhone or iPad. It is reachable only on your own
network, serves only the file you are playing, and only while you play it.

**Media servers you configure.** If you connect Muxivo to a server — for
example a NAS, Jellyfin, Emby or WebDAV — it contacts only the address you
supplied. Credentials are stored in the system Keychain and used only to reach
that server.

**Plex Media Server.** If you connect a Plex Media Server, Muxivo signs in with
Plex's own link page (plex.tv/link): you approve Muxivo there and plex.tv
returns a sign-in token. Muxivo never sees your Plex password. The token is
stored in the Keychain on your device, is sent only to plex.tv and to your
server, and is never logged. Muxivo reports playback progress and watched state
to your own server, as every Plex client does. What plex.tv and your server do
with information is governed by Plex's privacy policy
(plex.tv/about/privacy-legal); Muxivo itself receives nothing.

**Artwork and title lookups.** To find posters and titles, Muxivo may send the
title it read from a file name to a public metadata service. No identifier
about you is attached, and we receive nothing.

## Reports you choose to send

Muxivo can send three kinds of report, each only when you choose to: **Report
a Problem**, **Help Improve Muxivo** (library and crash summaries) and **Help
Improve Muxivo's Library** (file-name corrections). Every one is shown to you
in full before it is sent; you can remove parts of it, or save it to a file and
send it yourself instead. Nothing is sent in the background without your
choice.

### Where reports go and who can read them

Reports are stored in Muxivo's database in Apple's iCloud (CloudKit, the
public database of Muxivo's iCloud container). Despite the name, reports are
**not public**: each one can be read only by the device that sent it (so it
can show you the report's status) and by the developer. Other users cannot see
them. Sending needs your device to be signed in to iCloud, but your Apple ID,
name and email are **not** shared with us: CloudKit gives Muxivo only an
anonymous, app-specific identifier for the sender, which Muxivo does not read
or link to anything. If you are offline or not signed in to iCloud, the report
waits on your device and is sent later, or you can save it to a file.

### Problem reports

"Report a Problem" lets you tell us what went wrong. A problem report contains:

- **What you wrote**, and the kind of problem you picked. For casting problems,
  the TV or receiver model and connection you typed.
- **Diagnostics, only if you tick "Attach diagnostics":** the Muxivo version
  and build, whether it came from the App Store or TestFlight, your device
  model and system version; the format of the video involved (container, video
  and audio formats, resolution, HDR, its track list) and its file name (never
  its folder or path); how it was playing and the error; your last actions in
  Muxivo (for example "opened a file", "picked subtitles"); and recent lines of
  Muxivo's own log.

Before you see the report, Muxivo replaces private details with placeholders:
server and computer names and addresses, passwords, sign-in tokens and keys,
folder paths, your account name, email addresses and phone numbers in logs,
and device serial numbers. The contents of your videos are never included.

**We never ask for your email.** Each report gets an ID shown to you (for
example `MXR-7KQ2-9F3A`); "My Reports" lists the reports you sent and their
status. That ID is how you follow up.

### Help Improve Muxivo

When you open it, Muxivo shows a report about how your library is organized
and sends it only if you press Send:

- **Patterns, not names:** how files and folders are named, with every word
  that could identify a film, show or person replaced by a placeholder (for
  example `<title>.S<2d>E<2d>.<res>.mkv`);
- **counts** (items that looked misfiled, had no poster or would not play) and
  **format facts** from a fixed list (container, video and audio format,
  resolution band, a fixed error category);
- **optionally, crash and hang summaries** from Apple's MetricKit, if you turn
  that on: error codes and code addresses inside Muxivo, never messages. A
  crash log's "Send Report…" sends the same kind of summary;
- the Muxivo version, platform and system version.

### Library contributions (only if you turn them on)

"Help Improve Muxivo's Library" is off until you turn it on. When it is on, you
can choose to send a correction (one file's name, what Muxivo recognized it as
and what you corrected it to, and — only if you tick it — the names of the
folders it sits in inside your library), or your library's file names with
what Muxivo recognized each as. You see every entry first and can leave out any
file or folder; folders that look private and camera or phone recordings start
left out, and names that look personal are replaced automatically. Never sent:
your videos, full paths, server addresses, passwords or account details.

Each contribution carries a random code made on your device when you turn the
option on (not derived from your Apple ID or device). Library contributions are
read only by the people who maintain Muxivo's library rules and are never
published, including in public issue trackers.

### How reports are used and kept

Reports are used only to fix Muxivo and to teach it to recognize file names.
They are not sold, not shared with advertisers or data brokers, not used for
tracking, and no third-party analytics service is involved.

Problem reports and Help Improve Muxivo reports are kept while the problem is
being worked on and deleted no later than **12 months**
after they were received. Library contributions are kept until you ask us to
delete them.

### Deleting what you sent

- **Library contributions:** "Delete My Submissions" (in Help Improve Muxivo's
  Library) asks us to delete everything you contributed, and turns the option
  off.
- **Problem reports:** email the contact address below quoting the report ID
  (for example `MXR-7KQ2-9F3A`) and asking for deletion. We delete the report
  and confirm by reply.

## Optional iCloud sync

If you turn on syncing, your watched state, playback positions and My List are
stored in your own private iCloud account so they match across your devices.
The data goes to Apple's iCloud under your Apple ID; we have no access to it.

## Children

Muxivo is not directed at children and does not knowingly collect personal
information from anyone, including children.

## Changes

If this policy changes, the updated version will be posted here with a new
date.

## Contact

Questions about privacy, or a deletion request: email
muxivo.support@gmail.com

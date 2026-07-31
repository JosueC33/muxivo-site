---
title: Privacy Policy
---

# Privacy Policy

**Last updated: 31 July 2026**

Muxivo does not collect, transmit, or sell any personal information. There are
no accounts, no analytics, no advertising, no tracking, and no crash reporting.

This policy is short because there is genuinely very little to say.

## What stays on your Mac

Everything. Muxivo reads video files you choose and plays them. The following
are stored on your own computer and are never sent anywhere:

- The folders you add to your library, and the list of video files found in them
- Playback positions, watched state, and which audio or subtitle track you last
  chose for a file
- Poster images, which are extracted from your own video files
- Temporary converted copies of files being played, which are deleted
  automatically

## When Muxivo uses the network

Muxivo makes no connections to us, because there is no server to connect to.
It uses the network in exactly three ways:

**Streaming to your TV.** When you send video to an AirPlay device, Muxivo runs
a small web server on your local network so the TV can fetch the video directly
from your Mac. It is reachable only on your own network, serves only the single
file you are playing, and only for as long as you are playing it. Nothing leaves
your network.

**Connecting to media servers you configure.** If you connect Muxivo to a server
on your network — for example a NAS, Jellyfin or Emby — it contacts only the
address you supplied. Credentials are stored in the macOS Keychain, never in a
plain file, and are used only to reach that server.

**Optional artwork lookup.** Muxivo can fetch film and series artwork if, and
only if, you supply your own API key for a metadata service. This is off by
default. With no key, no such request is ever made. When enabled, the request
goes to that service and contains the film title parsed from your filename.

## Optional iCloud sync

If you turn on syncing, your watched state and playback positions are stored in
your own private iCloud account so they match across your Macs. This is off by
default. The data goes to Apple's iCloud under your Apple ID; we have no access
to it and no way to read it.

## Children

Muxivo is not directed at children and collects no information from anyone,
including children.

## Changes

If this policy ever changes, the updated version will be posted here with a new
date. Since the app collects nothing, any change is likely to be a
clarification rather than a new use of data.

## Contact

Questions about privacy: open an issue at
[github.com/JosueC33/muxivo-site/issues](https://github.com/JosueC33/muxivo-site/issues)

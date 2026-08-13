---
title: Support
---

# Muxivo Support

Muxivo plays the video files other players struggle with — MKV, AVI, TS and
more — and sends them to your TV over AirPlay with **picture as well as sound**.
It runs on the Mac. There is no iPhone or iPad app yet, and no app that runs on
the Apple TV itself — those are [being worked on](roadmap).

**Contact: [open an issue on GitHub](https://github.com/JosueC33/muxivo-site/issues)** — a real person reads these, and you can see the answers to everyone else's questions too.

Muxivo can open that page for you with your version already filled in: it is in
the gear menu at the bottom of the sidebar.

---

## Streaming to a TV

### The video plays on my Mac but the TV only gets sound

This is the problem Muxivo was built to solve, so if you are seeing it *in
Muxivo*, something is wrong — tell us. If you are seeing it in another app, it
is expected: players that draw video frames themselves cannot hand video to
AirPlay, only audio.

### My TV doesn't appear in the AirPlay list

Give it a few seconds — device discovery is not instant, and Muxivo shows
"searching for devices" until one is found. If it stays empty:

- Make sure your Mac and the TV are on the same Wi-Fi network.
- **Check whether a VPN is running.** This is the most common cause. Many VPNs
  block local network traffic, which stops the TV fetching video from your Mac.
  Pausing the VPN is often not enough — quit it completely and try again.
- Restart the TV. AirPlay receivers get into stuck states more often than you'd
  expect.

### The TV connects but the video won't play

Some televisions accept a narrower range of video than they advertise —
unusual resolutions, high frame rates, or very high bitrates. When one refuses
a stream it does not announce it: Muxivo shows the TV as connected and the
picture never arrives. Waiting will not change it. Stop the cast and start it
again, and if the same film fails twice, try a different one — that tells you
whether the problem is the television or that particular file.

It helps enormously to tell us the make and model of the TV along with the
file's format, since receiver behaviour varies a lot between brands.

### Does this work from an iPhone or iPad?

Not yet — Muxivo is a Mac app, and iPhone and iPad versions are
[being worked on](roadmap).

From the Mac it works the way you'd expect: the video is converted on the Mac
and the television fetches it from there. Both need to be on the same Wi-Fi
network.

### It worked before and stopped

Try resetting the paired devices in your TV's AirPlay settings, then connect
again. Televisions remember Macs by an identity that can go stale — for
instance after you migrate to a new computer.

---

## Playback

### A file won't open

Muxivo plays MKV, MP4, MOV, AVI, TS/M2TS and VOB. If a file in one of those
formats won't open, please send us the exact name and, if you know it, the
video and audio formats inside — that is usually enough to identify the
problem.

### The video plays but there's no sound

Some soundtracks cannot be decoded without licensed decoders that are not
available to third-party apps — Dolby TrueHD and the lossless layer of DTS-HD
Master Audio are the common cases. Where the file includes a second, ordinary
soundtrack, Muxivo switches to it automatically and tells you it has done so in
the Audio menu. Where it doesn't, there is unfortunately nothing we can do.

### The subtitles are missing or unstyled

Text subtitles appear in the Subtitles menu — both SRT files sitting beside the
video and text tracks stored inside it. They are drawn with the words and their
position on screen; the colours, fonts and effects that heavily styled
subtitles carry are not drawn today.

Subtitles that are pictures rather than text have to be drawn into the video
itself, so choosing one starts a conversion rather than appearing instantly.
That works for Blu-ray subtitle tracks in an MKV. Other picture subtitles are
listed in the menu and will not appear — that one is ours to fix.

### A large film takes a while to start

Muxivo indexes a file before playing it, and a very large file — 30 GB and
up — can take a few seconds. Most files start in about a second. A film that
isn't an ordinary widescreen shape — scope-ratio cinema, or older
standard-definition material — takes a couple of seconds longer.

---

## Reporting a problem

The more of this you can include, the faster it gets fixed:

1. What you did and what happened
2. The file's format, and its name if you don't mind sharing it
3. Whether you were streaming to a TV, and which TV
4. Your macOS version, and which Mac

Running Muxivo from Terminal with `MUXIVO_DEBUG=1` prints what the player
decided and why. Copying that in is the single most useful thing you can send.

---

## Things Muxivo deliberately doesn't do

- **It doesn't collect anything about you.** See the [privacy policy](privacy).
- **It doesn't download media.** It plays files you already have.
- **It doesn't phone home.** There is no server to phone.

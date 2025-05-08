<template>
    <div class="p-8 text-white bg-neutral-900 min-h-screen">
      <h1 class="text-3xl font-bold mb-4">My Config</h1>
      
      <!-- CFG CS2 -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">CFG CS2</h2>
        <pre class="bg-neutral-800 p-4 rounded">
          sensitivity 2;
          bind k +voicerecord;
          bind i noclip;
          bind mwheeldown +jump;
          volume 0.4;
          snd_roundend_volume 0;
          snd_mapobjective_volume 0;
          snd_deathcamera_volume 0;
          cl_hud_color 0;
          hud_showtargetid 1;
          viewmodel_presetpos 2;
          cl_hud_telemetry_frametime_show 2;
        </pre>
      </div>
      
      <!-- Viewmodel v2 -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">Viewmodel v2</h2>
        <pre class="bg-neutral-800 p-4 rounded">
          viewmodel_fov 99;
          viewmodel_offset_x 9;
          viewmodel_offset_y 9;
          viewmodel_offset_z -1.5;
          viewmodel_presetpos 0;
        </pre>
      </div>
  
      <!-- Best Crosshair Ever -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">Best Crosshair Ever</h2>
        <pre class="bg-neutral-800 p-4 rounded">
          CSGO-DkfWR-2tXNd-q9efV-7CJHk-QQSFE
        </pre>
      </div>
      
      <!-- Crosshair IDs -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">Crosshair IDs</h2>
        <pre class="bg-neutral-800 p-4 rounded">
          HS Crosshair: CSGO-XTNoM-jDYN2-TrMaq-km2mE-8MUnB
          Crosshair VALORANT Default: CSGO-LwFqP-TxQzA-ns4x9-66Nyu-kBYXC
          Current Crosshair: CSGO-qn2Ac-Ha9MX-87Kok-rVma5-ZmRBD
          Lumedas™ Crosshair: CSGO-nMEWJ-nVpcG-iZAOc-BzS4r-uoKjC
          Lumedas™ Crosshair2: CSGO-7tAJS-RWP3N-djnZ9-qt8pJ-sPsKG
          Crosshair: CSGO-6zcbh-HuJvn-kBHKt-ks7fs-ztHCF
          Crosshair2: CSGO-SziVH-m6Qmd-44sMk-TnsfH-DSSFE
          Crosshair3: CSGO-haDdY-RuJXd-2kZTs-9ars3-tXcNE
          Crosshair 2020: CSGO-QYbW9-excoy-TPacJ-ahpbL-dOSFE
          ropz: CSGO-UcXBk-p9Jpo-tJiAr-J6qNc-mRFuA
          <3: CSGO-28wZU-qcyKx-s7cpA-4JODJ-2BFKO
        </pre>
      </div>
  
      <!-- Video settings -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">Video Settings</h2>
        <pre class="bg-neutral-800 p-4 rounded">
          All very low/disabled, multicore rendering on, boost player contrast on, 2x MSAA
          Resolution: 4:3 1024x768 stretched
          sensitivity 2, 400 DPI
        </pre>
      </div>
  
      <!-- CFG CSGO -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">CFG CSGO</h2>
        <pre class="bg-neutral-800 p-4 rounded">
          bind mwheeldown +jump;
          bind i noclip;
          bind"c""+jump;-attack;";
          cl_parachute_autodeploy 0;
          cl_show_observer_crosshair 2;
          rate 786432;
          volume 0.1;
          snd_tensecondwarning_volume 0.1;
          snd_mvp_volume 0.1;
          cl_crosshairstyle 4;
          net_graph 1;
          net_graphproportionalfont 0;
        </pre>
      </div>
  
      <!-- Viewmodel CSGO (not using this) -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">Viewmodel CSGO (not using this)</h2>
        <pre class="bg-neutral-800 p-4 rounded">
          viewmodel_fov 99;
          viewmodel_offset_x 9;
          viewmodel_offset_y 9;
          viewmodel_offset_z -9;
          viewmodel_presetpos 0;
          cl_viewmodel_shift_left_amt 0;
          cl_viewmodel_shift_right_amt 0;
          viewmodel_recoil 0;
          cl_bob_lower_amt 0;
          cl_bobamt_lat 0;
          cl_bobamt_vert 0;
          cl_bobcycle 0;
          cl_righthand 1;
        </pre>
      </div>
    </div>
  </template>
  
  <script setup>
  // Siin ei ole vaja täiendavat JavaScripti, kuna kõik sisu on seotud statiliste tekstidega.
  </script>
  
  <style scoped>
  pre {
    white-space: pre-wrap; /* Teksti murrab ja näitab kõik pikad read */
    word-wrap: break-word;
  }
  </style>
  
/* UK construction hazard snippet library (vanilla JS) */
window.hazardSnippets = [
    {
    id: 'work-at-height',
    title: 'Work at height (Installing Bracketry)',
    hazard: 'Falling Objects, head collision with fixed objects, e.g. steelwork, pipework, building structure etc.',
    who: 'MVL Employees; Other Trade contractors',
    how: 'Unfinished/Unfixed ductwork or bracketry whilst being installed potentially falling from height, whilst working at height clashing with objects',
    controls: 'Ensure operatives are provided with and wear always on site suitable hard hat protection and are aware of statutory requirements for use. Also use of mechanical lifting equipment and a wide working platform. Tools to be tethered whilst being used when working at height.',
    action: 'Supervisor – Operatives',
    init: 'medium',
    resid: 'low'
  },
   {
    id: 'RA01_Falls_From_Height',
    title: 'RA01 Falls from height (ladders)',
    hazard: 'Fall from height using ladders',
    who: 'Employees, 3rd parties',
    how: 'Working from/ascending ladders; overreaching; defective/incorrect ladder',
    controls: 'Use Grade 1 ladders in good condition; ladders are for access only; maintain 3 points of contact; set up to avoid overreach; foot when erecting and tie off; keep rungs clean; inspect/clean regularly.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA01_Ladder_Slipping',
    title: 'RA01 Ladder slipping',
    hazard: 'Ladder slip/slide at base',
    who: 'Employees, 3rd parties',
    how: 'Poor ground, wrong angle or insufficient tie/footing',
    controls: 'Firm, level ground; 1:4 angle (~75°); extend ≥1 m above step-off; secure/ tie by stiles; keep feet area clear; foot ladders only up to 5 m.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA01_Ladder_Rolling',
    title: 'RA01 Ladder rolling (platform ladders)',
    hazard: 'Platform ladder movement/rolling',
    who: 'Employees, 3rd parties',
    how: 'Brakes not applied; overreaching/overloading while in use',
    controls: 'Position ladder correctly; lock brakes before use; do not move ladder while occupied; avoid overreaching/overloading.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA02 — Materials storage on site  :contentReference[oaicite:6]{index=6}
  {
    id: 'RA02_Falling_Materials',
    title: 'RA02 Falling materials',
    hazard: 'Stored materials falling/collapsing',
    who: 'Employees, 3rd parties',
    how: 'Poor stacking/unstable pallets or cylindrical items; unsecured stockpiles',
    controls: 'Follow manufacturer stacking guidance; max two pallets high; wedge cylindrical items; supervisor inspections; secure storage areas and restrict access.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA02_Environmental_Contamination',
    title: 'RA02 Environmental contamination',
    hazard: 'Leaks/spills polluting land/water',
    who: 'Environment / All contractors',
    how: 'Improper storage of oils/chemicals; loss of containment',
    controls: 'Secure stores for hazardous substances; prevent unauthorised access; provide trays/plant nappies/bunds for containment.',
    action: 'Environmental Lead',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA02_Hazardous_Substances',
    title: 'RA02 Hazardous substances (COSHH)',
    hazard: 'Exposure to hazardous substances',
    who: 'Employees, 3rd parties',
    how: 'Poorly controlled chemicals/fuels; incompatible storage',
    controls: 'COSHH assessments available; clearly marked drums; store in purpose-made containers away from heat/ignition/incompatibles.',
    action: 'COSHH Coordinator',
    init: 'medium',
    resid: 'low'
  },

  // RA03 — Storage and use of LPG  :contentReference[oaicite:7]{index=7}
  {
    id: 'RA03_Explosion',
    title: 'RA03 Explosion (LPG)',
    hazard: 'Explosion of LPG',
    who: 'Employees, 3rd parties',
    how: 'Leaks/ignition; cylinders in unsuitable locations; faulty equipment',
    controls: 'Store cylinders in open-mesh lockable cage away from buildings/ignition; only in-use cylinders at workface; planned maintenance; isolate faulty sets; segregate empties in cage.',
    action: 'Permit-to-Work Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA03_Fire',
    title: 'RA03 Fire (LPG)',
    hazard: 'Fire from LPG storage/use',
    who: 'Employees, 3rd parties',
    how: 'Sparks/heat near LPG; hot work without controls; smoking',
    controls: 'Keep from flammables/ignition; hot-work permit and controls; post-job hot checks; signage/no-smoking enforced; see COSHH for firefighting media.',
    action: 'Permit-to-Work Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA03_Asphyxia',
    title: 'RA03 Asphyxia (LPG)',
    hazard: 'Asphyxiation from gas accumulation',
    who: 'Employees, 3rd parties',
    how: 'Poor ventilation allowing LPG build-up',
    controls: 'Provide adequate ventilation in use/storage; use gas detectors where ventilation is poor; mark escape routes.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA04 — Slinging of loads  :contentReference[oaicite:8]{index=8}
  {
    id: 'RA04_Falling_Objects',
    title: 'RA04 Falling objects (slinging)',
    hazard: 'Load or gear falling during lift',
    who: 'Employees, 3rd parties',
    how: 'Poor planning/inspection; slinging over people; defective kit',
    controls: 'Plan to minimise risk; never sling over people/plant; use maintained/inspected, certificated gear; trained operatives only.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA04_Trapping_By_Load',
    title: 'RA04 Trapping by load',
    hazard: 'Crush/trap injuries from moving load',
    who: 'Employees, 3rd parties',
    how: 'Uncontrolled movement; sharp edges; loss of control',
    controls: 'Firm, level base for lifting appliance; protect sharp edges; use tag lines; wear appropriate PPE.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA04_Electrocution',
    title: 'RA04 Electrocution (OH lines)',
    hazard: 'Contact with overhead power lines',
    who: 'Employees, 3rd parties',
    how: 'Lifting operations near OHL without controls',
    controls: 'Plan SSoW near OHL; obtain load data & compatible gear; apply GS6 controls and agreed safe distances.',
    action: 'Appointed Person (Lifting)',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA04_Damage_To_Equipment',
    title: 'RA04 Damage to equipment',
    hazard: 'Damage to lifting appliance/gear',
    who: 'Employees, 3rd parties',
    how: 'Using defective kit or operating in unsafe conditions',
    controls: 'Report defects immediately; remove from service; suspend work in adverse weather.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA05 — Use of lifting equipment  :contentReference[oaicite:9]{index=9}
  {
    id: 'RA05_Falling_Objects',
    title: 'RA05 Falling objects (lifting equipment)',
    hazard: 'Dropped load during lifting operations',
    who: 'Employees, 3rd parties',
    how: 'Poor planning; uncertified equipment; untrained personnel',
    controls: 'Produce SSoW; case study for mobile crane lifts; use compliant/marked/certified/inspected equipment; trained personnel only.',
    action: 'Appointed Person (Lifting)',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA05_Crushing_Injuries',
    title: 'RA05 Crushing injuries',
    hazard: 'Crush injuries within lift zone',
    who: 'Employees, 3rd parties',
    how: 'Personnel in lift/exclusion zone',
    controls: 'Brief site; set and enforce exclusion zones; exclude non-essential personnel.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA05_Electrocution',
    title: 'RA05 Electrocution (OHL)',
    hazard: 'Contact with overhead lines during lifting',
    who: 'Employees, 3rd parties',
    how: 'Operating near live OHL without controls',
    controls: 'No lifting near OHL without DNO consultation; agree diversion/distances/precautions; erect barriers/goalposts to GS6.',
    action: 'Appointed Person (Lifting)',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA05_Damage_To_Equipment',
    title: 'RA05 Damage to equipment',
    hazard: 'Plant/equipment damage through misuse/overload',
    who: 'Employees, 3rd parties',
    how: 'Exceeding capacities; untrained operation',
    controls: 'Do not exceed machine capability; trained operators only.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA06_Lighting',
    title: 'RA06 Lighting (lifting ops)',
    hazard: 'Poor/insufficient lighting',
    who: 'Employees, 3rd parties',
    how: 'Inadequate illumination during lifting operations',
    controls: 'Provide adequate task lighting; use 110V only for temporaries; junction boxes installed by a trained, certified electrician.',
    action: 'Qualified Electrician',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA06_Collision_Vehicles_Structures_OHL',
    title: 'RA06 Collision with vehicles/structures/OHL',
    hazard: 'Vehicle/structure strike or overhead line contact',
    who: 'Employees, 3rd parties',
    how: 'Unplanned routes; poor escorting; inadequate separation distances',
    controls: 'Plan routes in advance; escort crane with competent banksman; protect OHL to owner’s safe distances; establish underground services; cordon gaps <600mm behind counterweight.',
    action: 'Appointed Person (Lifting)',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA06_Loss_Of_Load',
    title: 'RA06 Loss of load',
    hazard: 'Dropped or unstable load',
    who: 'Employees, 3rd parties',
    how: 'Unsuitable/uncertified equipment; poor inspection; untrained personnel',
    controls: 'Use adequate, certificated lifting gear; visual checks by slingers; trained/competent slingers and banksmen; cordon affected areas.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA06_Overturning_Crush',
    title: 'RA06 Overturning / crush injuries',
    hazard: 'Plant overturning or crushing personnel',
    who: 'Employees, 3rd parties',
    how: 'Siting on weak/uneven ground; lifts without outriggers/pads',
    controls: 'Use certificated crane/excavator; trained operator; site on firm, level ground; outriggers fully extended with pads before lifting.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA06_Poor_Visibility_Operator_Errors',
    title: 'RA06 Operator errors due to poor visibility',
    hazard: 'Miscommunication/misjudgement from restricted view',
    who: 'Employees, 3rd parties',
    how: 'Driver cannot see load/path',
    controls: 'Position competent banksmen in full view; use radios where required.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA06_Adverse_Weather',
    title: 'RA06 Adverse weather',
    hazard: 'Unsafe lifting in high winds/adverse conditions',
    who: 'Employees, 3rd parties',
    how: 'Operating above manufacturer wind limits',
    controls: 'Apply LOLER and manufacturer wind limits; cease lifting above threshold.',
    action: 'Appointed Person (Lifting)',
    init: 'high',
    resid: 'low'
  },

  // RA07 — Use of abrasive wheels  :contentReference[oaicite:6]{index=6}
  {
    id: 'RA07_Wheels_Bursting',
    title: 'RA07 Wheels bursting',
    hazard: 'Abrasive/cut-off wheel burst',
    who: 'Employees, 3rd parties',
    how: 'Incorrect selection/speed; side-grinding; over-worn wheels',
    controls: 'Trained personnel to mount wheels; correct wheel for task and spindle speed; no side-grinding; do not stop wheels by pressure; run new wheels free for 1 minute with others clear; speed marked on wheel.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA07_Electrocution',
    title: 'RA07 Electrocution',
    hazard: 'Electric shock from equipment',
    who: 'Employees, 3rd parties',
    how: 'Defective equipment, damaged leads, unsafe isolation',
    controls: 'Fit-for-purpose and tested equipment; pre-use inspections; disconnect from power after use.',
    action: 'Competent Person (Electrical)',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA07_Contact_With_Rotating_Wheel',
    title: 'RA07 Contact with rotating wheel',
    hazard: 'Contact with rotating abrasive wheel',
    who: 'Employees, 3rd parties',
    how: 'Hands/body enter danger zone; incorrect guards/rests',
    controls: 'Guards secured and in place; rests on pedestal grinders secured and close to wheel; isolate power before changing wheel.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA07_Eye_Injury_Flying_Particles',
    title: 'RA07 Eye injury from particles',
    hazard: 'Eye injury from flying particles',
    who: 'Employees, 3rd parties',
    how: 'Debris/projectiles during cutting/grinding',
    controls: 'Wear face shields during operations; use screens to protect others.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA07_Inhalation_Of_Dust',
    title: 'RA07 Inhalation of dust',
    hazard: 'Respirable dust inhalation',
    who: 'Employees, 3rd parties',
    how: 'Dust generated during cutting/grinding',
    controls: 'Use LEV and appropriate RPE where necessary.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA07_Excessive_Noise',
    title: 'RA07 Excessive noise',
    hazard: 'Noise exposure',
    who: 'Employees, 3rd parties',
    how: 'High noise from abrasive wheel operations',
    controls: 'Wear hearing protection during abrasive wheel operations.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA07_Vibration_White_Finger',
    title: 'RA07 Vibration white finger',
    hazard: 'Hand–arm vibration (HAVS)',
    who: 'Employees, 3rd parties',
    how: 'Prolonged tool use exceeding daily limits',
    controls: 'Limit durations; regular breaks; do not exceed manufacturer recommendations; keep hands warm; report symptoms immediately.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA07_Fire',
    title: 'RA07 Fire',
    hazard: 'Fire/ignition from sparks or equipment',
    who: 'Employees, 3rd parties',
    how: 'Sparks near combustibles; smouldering after work',
    controls: 'Provide relevant extinguishers; clear combustibles before work; hot-check area after finishing.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA08 — Forklift operations  :contentReference[oaicite:7]{index=7}
  {
    id: 'RA08_Operator_Error',
    title: 'RA08 Operator error (FLT)',
    hazard: 'Incorrect operation of forklift',
    who: 'Employees, 3rd parties',
    how: 'Untrained/unauthorised use of plant',
    controls: 'Only trained, competent, certified and authorised personnel to operate plant.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA08_Overturning',
    title: 'RA08 Overturning (FLT)',
    hazard: 'Forklift overturning',
    who: 'Employees, 3rd parties',
    how: 'Excess speed; obstructions; inclines; poor load position',
    controls: 'Drive to conditions and site speed limit; avoid sudden braking/impacts/inclines; carry loads low; cross obstacles slowly/diagonally; never use one fork arm.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA08_Overloading_Loss_Of_Load',
    title: 'RA08 Overloading / loss of load',
    hazard: 'Load dropped or unstable on forks',
    who: 'Employees, 3rd parties',
    how: 'Exceeding SWL; poor stacking; uneven load distribution',
    controls: 'Never exceed SWL or counterweight truck; avoid unsafe stack heights; distribute weight on both forks; do not travel with unsecured load.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'medium'
  },
  {
    id: 'RA08_Collision',
    title: 'RA08 Collision (FLT)',
    hazard: 'Collision with vehicles/structures/pedestrians',
    who: 'Employees, 3rd parties',
    how: 'Poor control/clearances/visibility',
    controls: 'Operate in a controlled manner; keep safe braking distance (~3 truck lengths); maintain fork heel ~100mm above ground and tips ~50mm above heel; ensure clearances; travel in reverse if vision obscured or use Banksman.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA08_Floor_Failure',
    title: 'RA08 Floor failure (FLT)',
    hazard: 'Floor/bridge plate collapse',
    who: 'Employees, 3rd parties',
    how: 'Driving over inadequately supported plates',
    controls: 'Verify plates are secured and will support truck weight prior to crossing.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA08_Explosions_Fire',
    title: 'RA08 Explosions & fire (FLT)',
    hazard: 'Fire from defects/fuel leaks',
    who: 'Employees, 3rd parties',
    how: 'Poor maintenance; leaking fuel lines',
    controls: 'Pre-use checks; ensure truck is fit for use; report defects immediately.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA08_Other_Personnel',
    title: 'RA08 Other personnel (FLT)',
    hazard: 'Pedestrian struck/trapped by FLT',
    who: 'Employees, 3rd parties',
    how: 'Pedestrians in FLT operating area; lack of awareness',
    controls: 'Ensure personnel awareness; ensure motion indicators work; drive slowly around pedestrians; never trap a person without an escape route.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA08_Trapping',
    title: 'RA08 Trapping (FLT)',
    hazard: 'Trapping in/around mast/forks',
    who: 'Employees, 3rd parties',
    how: 'Limbs placed between uprights/cross-members or under forks',
    controls: 'Keep within confines of truck; no limbs between mast components; no one to stand/walk beneath forks.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA09 — Manual handling  :contentReference[oaicite:8]{index=8}
  {
    id: 'RA09_Heavy_Loads',
    title: 'RA09 Lifting/pulling/pushing heavy loads',
    hazard: 'Musculoskeletal injury from handling heavy/awkward loads',
    who: 'Employees, 3rd parties',
    how: 'Single-person lifts beyond capability; poor technique',
    controls: 'Use mechanical aids where possible; if lifting manually, keep back straight, knees bent, look ahead, lift with legs; seek assistance if too heavy/awkward.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA09_Slips_Trips_Falls',
    title: 'RA09 Slips/trips/falls',
    hazard: 'Slips, trips and falls during handling',
    who: 'Employees, 3rd parties',
    how: 'Obstructed routes; poor housekeeping; poor lighting',
    controls: 'Plan route; remove obstacles; ensure safe access/egress and adequate lighting; maintain housekeeping.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA09_Cuts_Sharp_Edges',
    title: 'RA09 Cuts from sharp edges',
    hazard: 'Hand lacerations from sharp materials',
    who: 'Employees, 3rd parties',
    how: 'Handling sharp/abrasive objects',
    controls: 'Wear suitable gloves for handling tasks.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA09_Repetitive_Movements',
    title: 'RA09 Repetitive movements',
    hazard: 'Musculoskeletal disorders from repetitive tasks',
    who: 'Employees, 3rd parties',
    how: 'Prolonged repetitive handling without breaks',
    controls: 'Rotate tasks; take regular breaks; use mechanical aids where possible.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA11_Noise',
    title: 'RA11 Noise (compressors/breakers)',
    hazard: 'Excessive noise exposure',
    who: 'Employees, 3rd parties',
    how: 'High noise from compressor and breaker operation',
    controls: 'Assess impact; apply engineering controls (silencers/barriers); set HPZs/signage; provide hearing protection of correct SNR.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA11_Vibration',
    title: 'RA11 Vibration (compressors/breakers)',
    hazard: 'Hand–arm vibration (HAVS)',
    who: 'Employees, 3rd parties',
    how: 'Prolonged breaker use; blunt tools; cold conditions',
    controls: 'Follow manufacturer exposure times; job rotation/breaks; maintain tools/sharpen cutters; keep hands warm; report symptoms.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA11_Eye_Injury',
    title: 'RA11 Eye injury (flying particles)',
    hazard: 'Eye injury from flying particles',
    who: 'Employees, 3rd parties',
    how: 'Projectiles during breaking operations',
    controls: 'Wear impact-resistant goggles; set exclusion zones; use screens where third parties could be affected.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA11_Asphyxiation',
    title: 'RA11 Asphyxiation',
    hazard: 'Build-up of exhaust gases/oil mist',
    who: 'Employees, 3rd parties',
    how: 'Inadequate ventilation during operation',
    controls: 'Ensure adequate ventilation; if not achievable cease work and contact H&S; monitor atmosphere where necessary.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA11_Struck_By_Hose',
    title: 'RA11 Struck by hose',
    hazard: 'Hose whip/injury',
    who: 'Employees, 3rd parties',
    how: 'Hose failure or coupling separation',
    controls: 'Fit safety straps to all hoses; inspect before use; replace damaged hoses/couplings.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA11_Explosion',
    title: 'RA11 Explosion',
    hazard: 'Compressor failure/explosion',
    who: 'Employees, 3rd parties',
    how: 'Defects or lack of thorough examination',
    controls: 'Maintain current statutory examinations/certification; remove from service if faults suspected.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA12 — Portable electrical equipment  :contentReference[oaicite:6]{index=6}
  {
    id: 'RA12_Operator_Error',
    title: 'RA12 Operator error',
    hazard: 'Incorrect use of electrical equipment',
    who: 'Employees, 3rd parties',
    how: 'Incompetent use of portable tools',
    controls: 'Restrict to competent users; brief correct use and limits.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA12_Electrocution',
    title: 'RA12 Electrocution',
    hazard: 'Electric shock',
    who: 'Employees, 3rd parties',
    how: 'Damaged equipment, failed PAT, wet conditions',
    controls: 'Use only PAT-tested equipment; pre-use checks; only competent persons repair; keep equipment clean/dry; avoid damp surfaces.',
    action: 'Competent Person (Electrical)',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA12_Slips_Trips_Falls',
    title: 'RA12 Slips, trips & falls',
    hazard: 'Trips from cables/leads',
    who: 'Employees, 3rd parties',
    how: 'Trailing, overstretched or damaged cables',
    controls: 'Route cables tidily away from walkways/edges/heat; disconnect/store correctly after use.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA12_Flying_Particles',
    title: 'RA12 Flying particles',
    hazard: 'Eye injury from projectiles',
    who: 'Employees, 3rd parties',
    how: 'Cutting/grinding with portable tools',
    controls: 'Wear safety glasses/face visor; deploy screens to protect others.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA12_Noise',
    title: 'RA12 Noise',
    hazard: 'Hearing damage',
    who: 'Employees, 3rd parties',
    how: 'High noise from power tools',
    controls: 'Provide hearing protection; display mandatory signage in noisy areas.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA12_Vibration',
    title: 'RA12 Vibration',
    hazard: 'Hand–arm vibration (HAVS)',
    who: 'Employees, 3rd parties',
    how: 'Vibrating electrical tools used for long periods',
    controls: 'Take regular breaks/rotate tasks; keep hands warm; report issues promptly.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA13 — Joinery  :contentReference[oaicite:7]{index=7}
  {
    id: 'RA13_Contact_Entanglement',
    title: 'RA13 Plant contact/entanglement',
    hazard: 'Contact with moving plant/entanglement',
    who: 'Employees, 3rd parties',
    how: 'Loose clothing/hands near moving parts; no isolation',
    controls: 'Authorised operators only; keep clothing clear; use push sticks; isolate power when finished.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA13_Slips_Trips_Sprains',
    title: 'RA13 Slips/trips & sprains',
    hazard: 'Slips/trips and strains',
    who: 'Employees, 3rd parties',
    how: 'Waste causing obstructions; poor lighting',
    controls: 'Remove waste promptly; ensure good lighting.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA13_Fire',
    title: 'RA13 Fire',
    hazard: 'Fire during joinery operations',
    who: 'Employees, 3rd parties',
    how: 'Accumulation of wood/dust; ignition sources',
    controls: 'Do not allow wood to accumulate; ensure suitable extinguishers available.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA13_Noise',
    title: 'RA13 Noise',
    hazard: 'Noise exposure',
    who: 'Employees, 3rd parties',
    how: 'Use of saws/plant (e.g., cross-cut saw)',
    controls: 'Wear hearing protection when operating saws; warn others in vicinity.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA13_HAVS',
    title: 'RA13 Hand–arm vibration',
    hazard: 'HAVS from powered tools',
    who: 'Employees, 3rd parties',
    how: 'Prolonged use of vibrating tools',
    controls: 'Minimise exposure via job rotation and regular breaks.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA13_Hazardous_Substances',
    title: 'RA13 Hazardous substances',
    hazard: 'Exposure to hazardous substances',
    who: 'Employees, 3rd parties',
    how: 'Use/storage of adhesives, finishes, solvents',
    controls: 'Read relevant COSHH; store substances correctly when not in use.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA13_Flying_Particles',
    title: 'RA13 Flying particles',
    hazard: 'Eye injury from particles',
    who: 'Employees, 3rd parties',
    how: 'Cutting/machining with guards not set',
    controls: 'Set guards correctly; wear appropriate PPE.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA13_Dust',
    title: 'RA13 Dust',
    hazard: 'Respirable dust exposure',
    who: 'Employees, 3rd parties',
    how: 'Timber cutting/sanding generating dust',
    controls: 'Keep area clean; use suitable RPE for dusty processes; use LEV; be mindful of others nearby.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA13_Lifting_Operations',
    title: 'RA13 Lifting operations',
    hazard: 'Lifting activities in workshop',
    who: 'Employees, 3rd parties',
    how: 'Using untested/unsuitable lifting gear',
    controls: 'Use tested equipment with SWL indicated; ensure suitability for task.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA13_Manual_Handling',
    title: 'RA13 Manual handling',
    hazard: 'Handling of timber/components',
    who: 'Employees, 3rd parties',
    how: 'Carrying heavy/awkward timber; poor storage',
    controls: 'Wear suitable gloves; store timber in racks by size (larger lengths mid-height).',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },

  // RA14 — Disposal of waste materials  :contentReference[oaicite:8]{index=8}
  {
    id: 'RA14_Fires',
    title: 'RA14 Fires (waste)',
    hazard: 'Fires during waste storage/disposal',
    who: 'Employees, 3rd parties',
    how: 'Uncontrolled build-up; poor storage; ignition sources',
    controls: 'Provide secure skips; remove build-up regularly; no waste fires on site; provide suitable extinguishers for the waste type.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA14_Toxins_Contamination',
    title: 'RA14 Toxins/contamination',
    hazard: 'Environmental/health contamination',
    who: 'Employees, 3rd parties',
    how: 'Incorrect disposal; unregistered carriers; poor segregation',
    controls: 'Follow manufacturer/local authority instructions; use registered carriers with transfer notes; label containers; comply with COSHH for storage/disposal; handle asbestos per method statements.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA15 — Confined Spaces  :contentReference[oaicite:9]{index=9}
  {
    id: 'RA15_Falls_From_Height',
    title: 'RA15 Falls from height',
    hazard: 'Falls when entering/exiting confined space',
    who: 'Employees, 3rd parties',
    how: 'Access/egress via openings/steps without safeguards',
    controls: 'Use tripod, safety line and harness for entry/exit; place warning signage.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA15_Falling_Objects',
    title: 'RA15 Falling objects',
    hazard: 'Objects falling into the space',
    who: 'Employees, 3rd parties',
    how: 'Tools/materials lowered or dropped',
    controls: 'Lower tools before personnel; set barriers to prevent entry and falling materials.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA15_Explosions',
    title: 'RA15 Explosions',
    hazard: 'Ignition within confined space',
    who: 'Employees, 3rd parties',
    how: 'Flammable atmospheres; unsuitable equipment',
    controls: 'Monitor atmosphere; use approved electrical equipment; prohibit naked flames; ensure all operatives are CS trained.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA15_Poor_Light',
    title: 'RA15 Poor light',
    hazard: 'Insufficient lighting',
    who: 'Employees, 3rd parties',
    how: 'Low light levels in/around the space',
    controls: 'Use intrinsically safe lighting appropriate to zone.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA15_Asphyxiation',
    title: 'RA15 Asphyxiation',
    hazard: 'Oxygen deficiency/contaminants',
    who: 'Employees, 3rd parties',
    how: 'Poor ventilation; dust/fumes accumulation',
    controls: 'Monitor with gas meter; provide ventilation; keep BA available; use dust extraction where needed.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA15_Trapped_Personnel',
    title: 'RA15 Personnel becoming trapped',
    hazard: 'Entrapment in the confined space',
    who: 'Employees, 3rd parties',
    how: 'Obstructed exits; no comms/emergency plan',
    controls: 'Set reporting procedure and rescue plan; keep exits clear at all times.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA15_Disease',
    title: 'RA15 Disease',
    hazard: 'Biological/chemical exposure',
    who: 'Employees, 3rd parties',
    how: 'Contact with hazardous substances in space',
    controls: 'Apply relevant COSHH protective measures and hygiene controls.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA16_Striking_Of_Overhead_Lines',
    title: 'RA16 Striking of overhead lines',
    hazard: 'Contact with overhead power lines',
    who: 'Employees, 3rd parties',
    how: 'Plant/loads entering the danger zone of live overhead conductors',
    controls: 'Avoid work beneath lines where possible; agree diversion/safe distances with the electricity company; erect solid goalposts/high-visibility barriers to GS6; fit height restrictors to plant; check ground for hidden gradients that could defeat restrictors; brief all personnel; assume services are live.',
    action: 'Permit-to-Work Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA17 — Existing Underground Services  :contentReference[oaicite:6]{index=6}
  {
    id: 'RA17_Striking_Underground_Services',
    title: 'RA17 Striking underground services',
    hazard: 'Service strike (flooding/electrocution/explosion/fire)',
    who: 'Employees, 3rd parties',
    how: 'Excavation or ground works in proximity to existing utilities',
    controls: 'Obtain utility records; CAT & Genny to trace/mark services; look for surface clues; hand-dig trial holes to prove positions; mark lines; design/support excavations around services; assume services live; stop work and notify utility if struck; careful backfill to avoid voids/shifting.',
    action: 'Permit-to-Dig Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA17_Explosion',
    title: 'RA17 Explosion (identifying services)',
    hazard: 'Explosion during service identification',
    who: 'Employees, 3rd parties',
    how: 'Ignition sources near gases/vapours in poorly ventilated areas',
    controls: 'Ventilate; exclude naked flames; enforce no-smoking; use intrinsically safe equipment.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA17_YW_Easement',
    title: 'RA17 YW easement protection',
    hazard: 'Damage to high-pressure water main easement',
    who: 'Employees, 3rd parties',
    how: 'Uncontrolled works within easement (loading/excavation/vibration)',
    controls: 'Fence and sign easement; create gateways only where roads are planned; no drainage/road works until YW inspection; no point loadings, heavy vibration, deep excavations or piling without permit.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA18 — Excavations  :contentReference[oaicite:7]{index=7}
  {
    id: 'RA18_Striking_Underground_Services',
    title: 'RA18 Striking underground services',
    hazard: 'Service strike in excavation',
    who: 'Employees, 3rd parties',
    how: 'Excavating in areas with live buried utilities',
    controls: 'Assume services live; follow HSG47; CAT scans; stop work and contact utility if struck; careful reinstatement around services.',
    action: 'Permit-to-Dig Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA18_Collapse_Of_Excavation',
    title: 'RA18 Collapse of excavation',
    hazard: 'Excavation wall/edge failure',
    who: 'Employees, 3rd parties',
    how: 'Unstable ground, inadequate support or adverse conditions',
    controls: 'Assess ground before/during/after; competent inspections each shift/after events; install trench sheets/drag boxes per method; competent supervision for install/alter/remove; stop work if unsafe.',
    action: 'Temporary Works Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA18_Undermining_Structures',
    title: 'RA18 Undermining nearby structures',
    hazard: 'Loss of support to nearby foundations/scaffolds',
    who: 'Employees, 3rd parties',
    how: 'Excavating adjacent to structures without assessment/support',
    controls: 'Survey foundations; seek structural engineering advice; provide temporary support where required before digging.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA18_Falls_Into_Excavations',
    title: 'RA18 Materials/people/plant falling into excavations',
    hazard: 'Falls and dropped objects into open excavations',
    who: 'Employees, 3rd parties',
    how: 'Unprotected edges, spoil too close, unsecured buckets',
    controls: 'Keep spoil/materials away from edges; barrier and sign edges; check and secure buckets/attachments.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA18_Falls_From_Ladder',
    title: 'RA18 Falls from ladder (access to excavation)',
    hazard: 'Fall during access/egress',
    who: 'Employees, 3rd parties',
    how: 'Unsecured/defective ladders or poor footing',
    controls: 'Good condition; secure/tie; extend ~1 m above landing; firm level base; regular checks.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA19 — Use of Excavators  :contentReference[oaicite:8]{index=8}
  {
    id: 'RA19_People_Struck_By_Plant',
    title: 'RA19 People struck by plant/boom',
    hazard: 'Collision with excavator/boom',
    who: 'Employees, 3rd parties',
    how: 'Poor visibility, congested workface, proximity of personnel',
    controls: 'Use banksman where vision is impaired; segregate pedestrians; licensed operators only; flashing beacons; mandatory hi-vis.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA19_Striking_Of_Overhead_Lines',
    title: 'RA19 Striking of overhead lines',
    hazard: 'Contact with overhead power lines',
    who: 'Employees, 3rd parties',
    how: 'Excavator working beneath/near live conductors',
    controls: 'Avoid where practicable; agree safe distances/diversions; GS6 goalposts; height restrictors; check ground gradients.',
    action: 'Permit-to-Work Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA19_Falling_Objects',
    title: 'RA19 Falling objects (attachments/loads)',
    hazard: 'Dropped loads/attachments',
    who: 'Employees, 3rd parties',
    how: 'Working within operating radius or under suspended loads; quick-hitch issues',
    controls: 'Exclude persons from radius; verify bucket/attachments; no tampering with quick hitch; daily and weekly inspections.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA19_Plant_Overturning',
    title: 'RA19 Plant overturning',
    hazard: 'Loss of stability/rollover',
    who: 'Employees, 3rd parties',
    how: 'Working across gradients, undercutting faces, adverse ground',
    controls: 'Tracks/wheels at 90° to face; control gradients; prevent overhangs; inspect excavations/spoil especially after weather.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA19_Plant_Falling_Into_Excavation',
    title: 'RA19 Plant falling into excavation',
    hazard: 'Plant over-running into excavation',
    who: 'Employees, 3rd parties',
    how: 'Insufficient edge protection/stop blocks',
    controls: 'Provide stop blocks/visible barriers; fence edges; maintain high visibility of excavation limits.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA19_Falling_From_Excavator',
    title: 'RA19 Falling from excavator',
    hazard: 'Fall while accessing/egressing the cab',
    who: 'Employees, 3rd parties',
    how: 'Mud/debris on steps; uneven ground',
    controls: 'Keep steps/access clean; check ground before dismounting.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA20 — Works on Highway  :contentReference[oaicite:9]{index=9}
  {
    id: 'RA20_Traffic_Accidents',
    title: 'RA20 Traffic accidents',
    hazard: 'Collisions involving site traffic/public traffic',
    who: 'Employees, 3rd parties',
    how: 'Working on live carriageways; inadequate TM/controls',
    controls: 'Notify Local Highways Authority; authorisation prior to works; install/maintain TM to Chapter 8; keep carriageway and access/egress clear; plant on highway to have beacon/reverse alarm/signage; highway operators to hold valid UK driving licence.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA20_Contamination_Of_Carriageway',
    title: 'RA20 Contamination of the carriageway',
    hazard: 'Slippery/contaminated road surface',
    who: 'Employees, 3rd parties',
    how: 'Mud/spoil/oils tracked or spilled onto road',
    controls: 'Regular checks and prompt clearing by Site Foreman; follow COSHH; inspect TM for compliance with NRSWA/Chapter 8.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA20_Struck_By_Traffic',
    title: 'RA20 Struck by traffic',
    hazard: 'Operatives hit by passing vehicles',
    who: 'Employees, 3rd parties',
    how: 'Working outside safety zones or with inadequate TM',
    controls: 'Wear hi-vis; work within coned safety zones sized per Chapter 8; stop work if TM inadequate; ensure clear and adequate signage/speed control.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA20_Injury_To_Members_Of_The_Public',
    title: 'RA20 Injury to members of the public',
    hazard: 'Public exposed to site hazards',
    who: 'Employees, 3rd parties',
    how: 'Uncontrolled pedestrian access to work area',
    controls: 'Exclude public from work area; maintain pedestrian segregation compliant with Chapter 8 at all times.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA20_Adverse_Weather',
    title: 'RA20 Adverse weather',
    hazard: 'Reduced visibility/exposure to cold/wet',
    who: 'Employees, 3rd parties',
    how: 'Fog, rain, cold affecting safety and visibility',
    controls: 'Wear appropriate PPE; assess visibility during fog; adjust or pause works if unsafe.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA20_Slips_Trips_Falls',
    title: 'RA20 Slips, trips and falls',
    hazard: 'Trips on debris/materials',
    who: 'Employees, 3rd parties',
    how: 'Poor housekeeping in highway work area',
    controls: 'Keep areas clear; store materials neatly; maintain good housekeeping.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
    {
    id: 'RA21_Struck_By_Plant',
    title: 'RA21 Struck by plant',
    hazard: 'Collision with site vehicles/plant',
    who: 'Employees, 3rd parties',
    how: 'Mixed vehicle/pedestrian routes; poor control of movements',
    controls: 'Segregate vehicle and pedestrian routes; provide footways and signage; drivers to report to site; control with designated banksman; banksman to use recognised signals and wear hi-vis.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA21_Reversing',
    title: 'RA21 Reversing',
    hazard: 'Reversing vehicle incidents',
    who: 'Employees, 3rd parties',
    how: 'Restricted visibility during reversing',
    controls: 'Minimise reversing; keep personnel clear; provide guide markings; always use a banksman; ensure beacons/alarms/cameras working.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA21_Vehicles_Overturning',
    title: 'RA21 Vehicles overturning',
    hazard: 'Loss of stability/rollover',
    who: 'Employees, 3rd parties',
    how: 'Soft/uneven ground; poor driving practices',
    controls: 'Keep traffic areas firm and level; drive with care; mark/barrier hazards such as excavations.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA21_Falling_Materials',
    title: 'RA21 Falling materials',
    hazard: 'Materials falling during loading/unloading',
    who: 'Employees, 3rd parties',
    how: 'Working near offload points; unsecured loads',
    controls: 'Designate offload zone; keep personnel clear; ensure no objects can fall from equipment onto those below.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA22 — Work on Contaminated Land  :contentReference[oaicite:7]{index=7}:contentReference[oaicite:8]{index=8}
  {
    id: 'RA22_Contact_With_Hazardous_Contaminants_In_Soils',
    title: 'RA22 Contact with hazardous contaminants in soils',
    hazard: 'Exposure to contaminants in ground',
    who: 'Employees, 3rd parties',
    how: 'Working on contaminated sites without adequate controls',
    controls: 'Obtain soil analysis; produce SSoW and COSHH assessments; provide decontamination arrangements; brief all personnel on controls.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA22_Skin_Absorption',
    title: 'RA22 Skin absorption',
    hazard: 'Dermal uptake of contaminants',
    who: 'Employees, 3rd parties',
    how: 'Contact with contaminated soils/materials',
    controls: 'Provide correct PPE; launder clothing before reuse; nitrile gloves until contaminated clothing removed; no work clothing taken home; maintain hygiene; line work area to reduce spoil contact; provide first aid/welfare.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA22_Skin_Penetration',
    title: 'RA22 Skin penetration',
    hazard: 'Puncture wounds contaminated by soils',
    who: 'Employees, 3rd parties',
    how: 'Sharps/debris in contaminated ground',
    controls: 'Clean and dress wounds immediately; if exposure or symptoms per COSHH occur, seek medical attention.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA22_Ingestion',
    title: 'RA22 Ingestion',
    hazard: 'Ingestion of contaminants',
    who: 'Employees, 3rd parties',
    how: 'Poor hygiene during/after work',
    controls: 'No eating/drinking/smoking before washing with antibacterial wash and fresh water; no contaminated clothing taken off site.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA22_Inhalation',
    title: 'RA22 Inhalation',
    hazard: 'Inhalation of contaminated dusts/vapours',
    who: 'Employees, 3rd parties',
    how: 'Dust generation during excavation/handling',
    controls: 'Provide suitable RPE to match contaminant/type; damp down to suppress dust.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA22_Asphyxiation_Gassing',
    title: 'RA22 Asphyxiation/gassing',
    hazard: 'Atmospheric hazards in excavations/spaces',
    who: 'Employees, 3rd parties',
    how: 'Gas build-up; oxygen deficiency',
    controls: 'Use gas monitors; provide suitable RPE; restrict confined space entry to trained essential personnel; have escape equipment.',
    action: 'Confined Space Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA22_Fire_Explosion',
    title: 'RA22 Fire/explosion',
    hazard: 'Ignition of flammable contaminants',
    who: 'Employees, 3rd parties',
    how: 'Smoking/ignition sources near contamination',
    controls: 'Enforce no-smoking; exclude combustibles/reactives; eliminate ignition sources; provide firefighting facilities and emergency procedures.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA23 — Excavators used for lifting  :contentReference[oaicite:9]{index=9}
  {
    id: 'RA23_Dropping_Of_Load',
    title: 'RA23 Dropping of load',
    hazard: 'Dropped load during lifting by excavator',
    who: 'Employees, 3rd parties',
    how: 'Unsuitable machine/gear; exceeding SWL; poor slinging',
    controls: 'Use excavator designed/fitted for lifting with check valves & sling points; hold current test/exam certificates; never exceed SWL; display SWL table; competent slingers only; never slew over personnel/vehicles/huts.',
    action: 'Appointed Person (Lifting)',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA23_Boom_Striking_OH_Cables',
    title: 'RA23 Boom striking O/H cables',
    hazard: 'Contact with overhead power lines',
    who: 'Employees, 3rd parties',
    how: 'Lifting near live OHL',
    controls: 'Do not lift where OHL present without control; consult DNO; agree diversions/safe distances/precautions to GS6.',
    action: 'Permit-to-Work Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA23_Persons_Struck_By_Boom',
    title: 'RA23 Persons struck by boom',
    hazard: 'Impact with excavator parts',
    who: 'Employees, 3rd parties',
    how: 'Working within operating radius; poor exclusion',
    controls: 'Exclude persons from operating radius; use banksman for all lifting; competent operators; wear head protection and hi-vis.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA23_Overturning',
    title: 'RA23 Overturning',
    hazard: 'Loss of stability/rollover while lifting',
    who: 'Employees, 3rd parties',
    how: 'Exceeding capacity; poor ground; wrong boom orientation',
    controls: 'Do not exceed SWL; operate on firm/level base; lift with boom parallel to tracks/wheels; competent supervision for stability.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA24 — Work in live sewers  :contentReference[oaicite:10]{index=10}
  {
    id: 'RA24_Disease',
    title: 'RA24 Disease',
    hazard: 'Biological exposure (e.g., Leptospirosis)',
    who: 'Employees, 3rd parties',
    how: 'Contact with sewage/contaminated water',
    controls: 'Brief on Leptospirosis; seek GP advice if ill; provide high-standard welfare; suitable PPE; cover cuts; record injuries; clean contaminated equipment on site; do not take contaminated clothing home.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA24_Toxic_Fumes',
    title: 'RA24 Toxic fumes',
    hazard: 'Harmful gases in sewers',
    who: 'Employees, 3rd parties',
    how: 'Disturbance of sludge releasing gases',
    controls: 'Use gas detector before/during works; ventilate; act on readings.',
    action: 'Confined Space Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA24_Confined_Spaces',
    title: 'RA24 Confined spaces',
    hazard: 'Confined space entry risks',
    who: 'Employees, 3rd parties',
    how: 'Entry into sewers',
    controls: 'Only trained/competent operatives; read/understand confined space RA; permit & rescue plan in place.',
    action: 'Confined Space Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA25 — Work near water  :contentReference[oaicite:11]{index=11}
  {
    id: 'RA25_Drowning',
    title: 'RA25 Drowning',
    hazard: 'Fall into water leading to drowning',
    who: 'Employees, 3rd parties',
    how: 'Working near unprotected water edge; tides/weather',
    controls: 'Erect/maintain physical barriers; check tides and weather; provide lifebuoy/line and brief operatives; CPR-trained first aider present; establish emergency procedures and reliable comms.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA25_Disease',
    title: 'RA25 Disease',
    hazard: 'Waterborne disease (e.g., Leptospirosis)',
    who: 'Employees, 3rd parties',
    how: 'Immersion/contact with untreated water',
    controls: 'Maintain strict hygiene; provide leptospirosis info; monitor for flu-like symptoms; escort to hospital if symptomatic and inform staff of risk.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA25_Plant_Entering_Water',
    title: 'RA25 Plant entering water',
    hazard: 'Plant driven over bank/edge',
    who: 'Employees, 3rd parties',
    how: 'Poor edge definition; inadequate barriers',
    controls: 'Erect adequate barriers; highlight edge of bank; prevent plant approaching edge.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA25_Inadequate_Lighting',
    title: 'RA25 Inadequate lighting',
    hazard: 'Poor visibility near water',
    who: 'Employees, 3rd parties',
    how: 'Work during darkness/poor weather',
    controls: 'Provide sufficient lighting to illuminate water edge and for search; use during poor light/visibility.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
    {
    id: 'RA26_Respirable_Crystalline_Silica',
    title: 'RA26 Respirable crystalline silica (RCS)',
    hazard: 'Inhalation of RCS leading to silicosis/COPD',
    who: 'Employees, 3rd parties',
    how: 'Cutting/grinding/handling of concrete, masonry and stone generating fine dust',
    controls: 'Plan to eliminate/reduce dust; wet-cut or use on-tool extraction; local exhaust ventilation where feasible; provide/mandate FFP3/P3 RPE; face-fit testing and clean-shaven policy; monitor vs WEL; housekeeping to prevent re-suspension.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA26_Nuisance_Dust_Visibility',
    title: 'RA26 Nuisance dust & visibility',
    hazard: 'Reduced visibility and irritation from general dust',
    who: 'Employees, 3rd parties',
    how: 'Dry sweeping, trafficking of dusty areas, wind-blown fines',
    controls: 'Damp down; avoid dry sweeping; vacuum/LEV preferred; wheel washing and sheeting; schedule dusty tasks away from public; barrier and sign.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA26_Eye_Skin_Irritation',
    title: 'RA26 Eye/skin irritation',
    hazard: 'Irritation from alkaline cement dust and fines',
    who: 'Employees, 3rd parties',
    how: 'Direct contact or airborne dust into eyes/onto skin',
    controls: 'Safety eyewear/face shields; gloves appropriate to cement; wash facilities; no rubbing of eyes; prompt decontamination.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },

  // RA27 — Vermin  :contentReference[oaicite:6]{index=6}
  {
    id: 'RA27_Disease_From_Vermin',
    title: 'RA27 Disease from vermin',
    hazard: 'Leptospirosis/Weil’s and other zoonoses',
    who: 'Employees, 3rd parties',
    how: 'Exposure to urine/faeces or bites from rats/vermin on site',
    controls: 'Engage licensed pest control; restrict food waste; wear gloves; cover cuts; strict hygiene before eating/drinking/smoking; brief symptoms and reporting.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA27_Bites_Stings_Allergy',
    title: 'RA27 Bites, stings & allergy',
    hazard: 'Allergic reaction or infection from bites/stings',
    who: 'Employees, 3rd parties',
    how: 'Contact with nests or disturbed vermin/insects',
    controls: 'Avoid known nests; barrier/sign; first aid on site; seek medical help for reactions; consider tetanus up to date.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },

  // RA28 — Use of ride-on rollers  :contentReference[oaicite:7]{index=7}
  {
    id: 'RA28_Overturning_Roller',
    title: 'RA28 Overturning (roller)',
    hazard: 'Loss of stability/rollover of ride-on roller',
    who: 'Employees, 3rd parties',
    how: 'Crossing excessive slopes, soft edges, operating near excavations',
    controls: 'Use ROPS and wear seat belt; operate up/down slopes (avoid traversing); assess ground/support; keep away from edges/voids; banksman where vision restricted.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA28_Struck_By_Roller',
    title: 'RA28 Struck by roller',
    hazard: 'Pedestrian struck by moving roller',
    who: 'Employees, 3rd parties',
    how: 'Poor segregation and reversing in confined areas',
    controls: 'Segregate with barriers; set exclusion zones at ends of runs; reversing alarm/beacon functional; use banksman where required.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA28_Noise_WBV',
    title: 'RA28 Noise & WBV (roller)',
    hazard: 'Hearing damage and whole-body vibration',
    who: 'Employees, 3rd parties',
    how: 'Prolonged roller operation on rough surfaces',
    controls: 'Hearing protection; plan durations/rotation; select appropriate machine; maintain surfaces to reduce vibration.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA29 — Wheeled loader excavators  :contentReference[oaicite:8]{index=8}
  {
    id: 'RA29_Struck_By_Plant_Loader',
    title: 'RA29 Struck by plant (loader)',
    hazard: 'Collision with wheeled loader/excavator',
    who: 'Employees, 3rd parties',
    how: 'Blind spots, tight workfaces, poor segregation',
    controls: 'Appoint banksman; define plant/pedestrian segregation; hi-vis mandatory; working beacons/alarms; competent/authorised operators only.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA29_Falling_Material_From_Bucket',
    title: 'RA29 Falling material from bucket (loader)',
    hazard: 'Material or attachment falling',
    who: 'Employees, 3rd parties',
    how: 'Overfilled bucket; people under load; unsecured attachments',
    controls: 'Exclude persons from radius; do not pass loads over people; verify quick-hitch/attachments; routine pre-use and weekly checks.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA29_Overturning_Loader',
    title: 'RA29 Overturning (loader)',
    hazard: 'Machine rollover/loss of stability',
    who: 'Employees, 3rd parties',
    how: 'Operating on steep/uneven ground; edges/voids',
    controls: 'Assess ground and gradients; maintain safe margins from edges; use stop blocks; avoid sudden turns on slopes.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA29_Striking_Overhead_Lines',
    title: 'RA29 Striking overhead lines (loader)',
    hazard: 'Contact with OHL with loader/attachments',
    who: 'Employees, 3rd parties',
    how: 'Working beneath/near live conductors',
    controls: 'Avoid where practicable; GS6 goalposts; agree safe distances/diversions with DNO; height restrictors; assume lines live.',
    action: 'Permit-to-Work Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA30 — Open-cab dumpers  :contentReference[oaicite:9]{index=9}
  {
    id: 'RA30_Overturning_Dumper',
    title: 'RA30 Overturning (dumper)',
    hazard: 'Dumper rollover/loss of stability',
    who: 'Employees, 3rd parties',
    how: 'Side slopes, soft verges, tipping near edges',
    controls: 'ROPS/seat belt used at all times; keep routes level/compacted; tip on level ground; stop blocks near edges; avoid sharp turns on slopes.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA30_Struck_By_Dumper',
    title: 'RA30 Struck by dumper',
    hazard: 'Pedestrian struck by dumper (especially during reversing)',
    who: 'Employees, 3rd parties',
    how: 'Restricted visibility; congested access',
    controls: 'One-way systems; banksman in tight areas; enforce speed limit; keep walkways segregated and signed.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA30_Loading_Tipping_Risks',
    title: 'RA30 Loading/tipping risks (dumper)',
    hazard: 'Injury from loading/tipping operations',
    who: 'Employees, 3rd parties',
    how: 'Operator remaining seated under excavator bucket; unstable ground at tip',
    controls: 'No person seated during loading; exclusion around loading zone; tip only on level, inspected ground; clear communications with excavator operator.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA31_Overturning_Mixer',
    title: 'RA31 Overturning (mixer)',
    hazard: 'Mixer overturning',
    who: 'Employees, 3rd parties',
    how: 'Mixer positioned on poor ground or moved over unsuitable routes',
    controls: 'Position on level, well consolidated ground away from traffic; plan routes to avoid excavations/poor terrain; secure large mixers to towing plant with correct tow bar/locators; move at low speed.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA31_Entrapment_Mixer',
    title: 'RA31 Entrapment (mixer)',
    hazard: 'Entrapment in rotating parts',
    who: 'Employees, 3rd parties',
    how: 'Hands/head/feet inside drum or under engine cover; cleaning while rotating',
    controls: 'No hands/head/feet in rotating drum/engine area; close guards immediately after start/stop; never work on mixer while rotating; clean with plenty of water/bricks; never insert held items into rotating drum; use banksman for reversing.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA31_Concrete_Splashes',
    title: 'RA31 Concrete splashes (mixer)',
    hazard: 'Cement/concrete splashes to eyes/skin',
    who: 'Employees, 3rd parties',
    how: 'Standing too close to discharge; inadequate PPE/welfare',
    controls: 'Wear gloves/overalls/goggles; stand clear during discharge; provide washing/drying facilities; follow COSHH assessment; eyewash available.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA32 — Concrete placing (skips)  :contentReference[oaicite:6]{index=6}
  {
    id: 'RA32_Falling_Moving_Objects_Skip',
    title: 'RA32 Falling/moving objects (skip)',
    hazard: 'Operatives struck by falling/moving objects',
    who: 'Employees, 3rd parties',
    how: 'Defective lifting gear/skip; poor positioning of crane; inadequate inspection',
    controls: 'Daily “competent person” inspections of skips/lifting gear/crane; remove defective kit; use only certificated gear; position crane on level, consolidated ground with good visibility.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA32_Overspill_Skip',
    title: 'RA32 Overspill (skip)',
    hazard: 'Operatives struck by overspill',
    who: 'Employees, 3rd parties',
    how: 'Overfilled skip or faulty discharge mechanism',
    controls: 'Lift away from people/buildings/public; inspect discharge gear; do not overfill; remove concrete residue after each continuous use.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA32_Struck_By_Skip',
    title: 'RA32 Struck by skip',
    hazard: 'Hit by suspended/landing skip',
    who: 'Employees, 3rd parties',
    how: 'Poorly controlled lifting/egress routes',
    controls: 'Trained banksman to direct all lifts; provide and maintain safe egress routes; hard hats & hi-vis for all involved in skip operations.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA33 — Concrete finishing  :contentReference[oaicite:7]{index=7}
  {
    id: 'RA33_Concrete_Burns_Finishing',
    title: 'RA33 Concrete burns (finishing)',
    hazard: 'Chemical burns from wet concrete',
    who: 'Employees, 3rd parties',
    how: 'Direct skin contact/kneeling on fresh concrete; no hygiene',
    controls: 'Wear gloves/impervious footwear; do not kneel/sit on wet concrete; provide wash/eyewash; brief COSHH; launder contaminated clothing before reuse; rinse skin/eyes immediately after contact.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA33_Lifting_Over_Finishers',
    title: 'RA33 Lifting over finishers (finishing)',
    hazard: 'Operatives struck by lifting operations',
    who: 'Employees, 3rd parties',
    how: 'Slewing over finishing area without control',
    controls: 'No lifting over finishers; use banksman when plant slews near finishing works/formwork.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA33_Falls_From_Height_Finishing',
    title: 'RA33 Falls from height (finishing)',
    hazard: 'Falls at slab edges/formwork',
    who: 'Employees, 3rd parties',
    how: 'Insufficient operatives; removal of temporary elements; inadequate edge protection',
    controls: 'Provide adequate labour especially in high winds; finishers must not remove any temporary structural elements; provide edge protection per legislation.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA34 — Use of Road Planers  :contentReference[oaicite:8]{index=8}
  {
    id: 'RA34_Noise_Dust_Planer',
    title: 'RA34 Noise & dust (planer)',
    hazard: 'Hearing damage and dust inhalation',
    who: 'Employees, 3rd parties',
    how: 'Planing operations generating noise and dust',
    controls: 'Wear ear defenders; safety glasses & dust masks where required; damp the drum to control dust.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Struck_By_Vehicles_Planer',
    title: 'RA34 Struck by vehicles (planer)',
    hazard: 'Impact with vehicles',
    who: 'Employees, 3rd parties',
    how: 'People within slewing/track area or traffic interface',
    controls: 'Hi-vis clothing; rotating beacons/reverse alarms; set exclusion zones; check no-one is under/near conveyor or running gear before moving.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Entanglement_Planer',
    title: 'RA34 Entanglement (planer)',
    hazard: 'Entanglement with rotating/moving parts',
    who: 'Employees, 3rd parties',
    how: 'Loose clothing/unguarded parts; working near milling drum',
    controls: 'No loose clothing; guards in place; do not place limbs near drum; no modifying/removing guards without written permission; follow SSoW for pick replacement.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Traffic_Accidents_Planer',
    title: 'RA34 Traffic accidents (planer)',
    hazard: 'Collisions with public traffic',
    who: 'Employees, 3rd parties',
    how: 'Inadequate TM on highway',
    controls: 'Maintain highway exclusion zone to Chapter 8/NRSWA; controlled access/egress; use banksman; stop work if TM inadequate; contact PC/Head Office.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Overturning_Planer',
    title: 'RA34 Overturning (planer)',
    hazard: 'Planer rollover/loss of stability',
    who: 'Employees, 3rd parties',
    how: 'Back-tracking on planed areas; severe camber; ground hazards',
    controls: 'Keep speed low on planed surfaces; be aware of stopping distance/elevator position; keep area free of hazards; drive to capability (350 planers higher risk).',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Fire_Explosion_Planer',
    title: 'RA34 Fire/explosion (planer)',
    hazard: 'Ignition from services/flammables',
    who: 'Employees, 3rd parties',
    how: 'Unidentified underground services or low OHL',
    controls: 'Identify services; stop work near low OHL and contact PC.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Falling_Objects_Planer',
    title: 'RA34 Falling objects (planer)',
    hazard: 'Falling material from elevator/loading area',
    who: 'Employees, 3rd parties',
    how: 'Personnel within conveyor/truck loading zone',
    controls: 'Keep elevator and truck loading area free from personnel and the public.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Slips_Trips_Planer',
    title: 'RA34 Slips/trips (planer)',
    hazard: 'Trips on planed surfaces',
    who: 'Employees, 3rd parties',
    how: 'Uneven/stepped finished surface',
    controls: 'Ensure operatives are aware of planed areas.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Vibration_Planer',
    title: 'RA34 Vibration (planer)',
    hazard: 'Hand–arm vibration exposure',
    who: 'Employees, 3rd parties',
    how: 'Use of planing tools with worn picks/excess depth',
    controls: 'Use correct picks/depths; maintain tools regularly; keep hands warm; stop and report if vibration excessive.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA35 — Use of pavers  :contentReference[oaicite:9]{index=9}
  {
    id: 'RA35_Plant_Collision_Paver',
    title: 'RA35 Plant collision (paver)',
    hazard: 'Collision with operatives/vehicles',
    who: 'Employees, 3rd parties',
    how: 'Working near paver during loading/unloading; poor awareness',
    controls: 'Competent operators only; operatives stand clear at all times; wear hi-vis; banksman in heavily trafficked/pedestrian areas and when crossing highways; always board from rear using handholds; operator never leaves controls while moving.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA35_Trapped_Between_Vehicle_And_Paver',
    title: 'RA35 Trapped between delivery vehicle/paver',
    hazard: 'Entrapment between vehicles',
    who: 'Employees, 3rd parties',
    how: 'Uncontrolled reversing and access to hopper area',
    controls: 'All reversing with banksman; no access in front of hopper until all movements stop.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA35_Overturning_Paver',
    title: 'RA35 Overturning (paver)',
    hazard: 'Paver overturn/instability',
    who: 'Employees, 3rd parties',
    how: 'Working near ditches/soft verges; gradients',
    controls: 'Supervisors to verify integrity of area; keep plant/vehicles clear of dykes/ditches (esp. after rain); select correct gear before gradients.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA35_Entrapment_Moving_Parts_Paver',
    title: 'RA35 Entrapment in moving parts (paver)',
    hazard: 'Entrapment during clearing/maintenance',
    who: 'Employees, 3rd parties',
    how: 'Working on plant while running; guards removed',
    controls: 'Shut down before clearing/maintenance; only competent persons to maintain; follow approved procedures.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA35_Hot_Parts_Substances_Paver',
    title: 'RA35 Hot parts/substances (paver)',
    hazard: 'Burns from hot plant/products',
    who: 'Employees, 3rd parties',
    how: 'Contact with burner/exhaust/hot bitumen',
    controls: 'Isolate hot parts; mark with signage; allow to cool before maintenance/repair; never leave unattended with burners operating.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA35_Tipper_Rear_Door',
    title: 'RA35 Contact with tipper rear door',
    hazard: 'Impact from rear door',
    who: 'Employees, 3rd parties',
    how: 'Unsecured tipper door during approach',
    controls: 'Secure door and attach safety chain before approaching.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
   {
    id: 'RA36_Overturning_Plant_Load_Unload',
    title: 'RA36 Overturning (plant loading/unloading)',
    hazard: 'Plant overturning during loading/unloading',
    who: 'Employees, 3rd parties',
    how: 'Uneven/soft ground; uncontrolled manoeuvres on ramps or low loader',
    controls: 'Clear non-essential personnel; level, well-consolidated approaches; competent banksman; trained operators only; controlled movements on/off trailer.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA36_Overturning_Entering_Leaving_Site',
    title: 'RA36 Overturning (entering/leaving site)',
    hazard: 'Vehicle overturning on site approach',
    who: 'Employees, 3rd parties',
    how: 'Poor access routes; soft verges; camber/gradients',
    controls: 'Driver reports to supervisor; use firm, level, well-consolidated routes; adjust route if conditions deteriorate.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA36_Inadequately_Secured_Load',
    title: 'RA36 Inadequately secured load',
    hazard: 'Load shift/loss in transit',
    who: 'Employees, 3rd parties',
    how: 'Uneven distribution; damaged or insufficient chains',
    controls: 'Evenly distribute load; secure with tested chains; remove damaged chains; secure all loose items; clean mud/debris before leaving site.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA36_Vehicle_Defects',
    title: 'RA36 Vehicle defects',
    hazard: 'Mechanical failure leading to incident',
    who: 'Employees, 3rd parties',
    how: 'Lack of checks; defects not reported',
    controls: 'Pre-journey checks each time; record and report defects; remove unserviceable vehicles/trailers from use.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA36_Driver_Fatigue_Illness',
    title: 'RA36 Driver fatigue/illness',
    hazard: 'Loss of control due to fatigue or illness',
    who: 'Employees, 3rd parties',
    how: 'Exceeding hours; continuing when unwell',
    controls: 'Do not exceed recommended driving hours; stop and report if fatigued/distressed or after any incident.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA38 — Use of Dozer  :contentReference[oaicite:5]{index=5}
  {
    id: 'RA38_Struck_By_Plant_Dozer',
    title: 'RA38 Struck by plant (dozer)',
    hazard: 'Collision with moving dozer',
    who: 'Employees, 3rd parties',
    how: 'Poor segregation; blind spots during manoeuvres',
    controls: 'Exclude workers with barriers/exclusion zones; licensed operators only; fit beacons and white-noise alarms; mandatory hi-vis.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA38_Plant_Overturning_Dozer',
    title: 'RA38 Overturning (dozer)',
    hazard: 'Dozer rollover/loss of stability',
    who: 'Employees, 3rd parties',
    how: 'Working across gradients; undercutting faces; unstable spoil',
    controls: 'Tracks at 90° to workface; avoid overhangs; inspect excavations/spoil especially after adverse weather; control gradients.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA38_Dozer_Into_Excavation',
    title: 'RA38 Plant entering excavation (dozer)',
    hazard: 'Dozer over-running into void',
    who: 'Employees, 3rd parties',
    how: 'No stop blocks; poor edge visibility',
    controls: 'Install stop blocks/visible barriers; fence edges; keep excavation limits highly visible.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA38_Falls_From_Dozer',
    title: 'RA38 Falls from dozer',
    hazard: 'Fall during access/egress',
    who: 'Employees, 3rd parties',
    how: 'Mud/debris on steps; uneven ground at cab',
    controls: 'Keep steps/handholds clean; confirm ground condition before stepping down.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },

  // RA39 — Operation of Tipper  :contentReference[oaicite:6]{index=6}
  {
    id: 'RA39_Contact_With_Personnel_Tipper',
    title: 'RA39 Contact with site personnel (tipper)',
    hazard: 'People struck by tipper (esp. reversing)',
    who: 'Employees, 3rd parties',
    how: 'Restricted visibility; uncontrolled reversing; pedestrians in route',
    controls: 'Minimise reversing; functional alarms/cameras/lights; banksman with agreed signals; segregate pedestrians; obey site routes/rules; never mount/dismount moving vehicle; keep clear front/rear when tipping.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA39_Tipper_Entering_Excavation',
    title: 'RA39 Tipper entering excavation',
    hazard: 'Vehicle over-running into excavation',
    who: 'Employees, 3rd parties',
    how: 'No stop blocks or fencing',
    controls: 'Provide stop blocks; fence and mark excavation edges; maintain visibility.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA39_Trapped_Between_Body_Chassis',
    title: 'RA39 Trapped between body and chassis (tipper)',
    hazard: 'Crush injury during tipping/maintenance',
    who: 'Employees, 3rd parties',
    how: 'Entering pinch points while body raised',
    controls: 'Never enter space between body and chassis in operation; follow lock-out/isolation for maintenance.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA39_Maintenance_Failure_Tipping',
    title: 'RA39 Maintenance failure during tipping',
    hazard: 'Mechanical failure causing incident',
    who: 'Employees, 3rd parties',
    how: 'Poorly maintained plant; lack of checks',
    controls: 'Maintain per manufacturer; daily operator checks recorded; remove unsafe plant from use.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA39_Falling_Materials_Tipper',
    title: 'RA39 Falling materials (tipper)',
    hazard: 'Impact from tailgate/load during tip',
    who: 'Employees, 3rd parties',
    how: 'Unreleased/loose tailgate; overfilled or uneven load',
    controls: 'Spread/load evenly and sheet; release/lock tailgate correctly; confirm body fully empty after tipping.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA39_Load_Sticking_Tipper',
    title: 'RA39 Load sticking (tipper)',
    hazard: 'Instability/secondary tip due to stuck load',
    who: 'Employees, 3rd parties',
    how: 'Driving to free load; repeated tipping attempts',
    controls: 'Do not drive to free stuck load; lower body and free safely before re-raising; ensure empty before moving off.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA39_Striking_Overhead_Lines_Tipper',
    title: 'RA39 Striking overhead lines (tipper)',
    hazard: 'Contact with overhead power lines',
    who: 'Employees, 3rd parties',
    how: 'Tipping beneath/near live OHL',
    controls: 'Erect solid goalposts/visible barriers at GS6 distances; do not tip under OHL unless a specific RAMS is in place.',
    action: 'Permit-to-Work Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA41 — Vibration  :contentReference[oaicite:7]{index=7}
  {
    id: 'RA41_Duration_Of_Exposure',
    title: 'RA41 Duration of exposure (vibration)',
    hazard: 'HAVS from excessive daily trigger times',
    who: 'Employees, 3rd parties',
    how: 'Long continuous use of vibrating tools/machinery',
    controls: 'Limit durations; schedule breaks; rotate tasks; maintain steady workload; follow exposure guidance.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA41_Incorrect_Tool_Usage',
    title: 'RA41 Incorrect tool usage (vibration)',
    hazard: 'Elevated vibration due to wrong tool/condition',
    who: 'Employees, 3rd parties',
    how: 'Using blunt/unsuitable tools; poor maintenance',
    controls: 'Select correct tool; maintain/repair promptly; report issues to supervisor; replace blunt cutters; keep equipment in good order.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA41_Cold_Weather_Effects',
    title: 'RA41 Cold weather effects (vibration)',
    hazard: 'Worsening HAVS symptoms in cold',
    who: 'Employees, 3rd parties',
    how: 'Reduced blood flow while using vibrating tools',
    controls: 'Keep hands warm; wear gloves/appropriate clothing; brief smokers on increased risk; follow site HAVS guidance.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA42_Falls_From_Open_Edges',
    title: 'RA42 Falls from open edges',
    hazard: 'Falls from height at unprotected edges/openings',
    who: 'Employees, 3rd parties',
    how: 'Working near slab edges, voids or leading edges without suitable edge protection',
    controls: 'Provide compliant edge protection/guardrails; install toe boards and covers for openings; inspect barriers each shift and after events; prevent removal without authorisation.',
    action: 'Temporary Works Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA42_Falls_From_Ladders',
    title: 'RA42 Falls from ladders',
    hazard: 'Falls while ascending/descending ladders',
    who: 'Employees, 3rd parties',
    how: 'Incorrect ladder selection/angle; unsecured ladders; overreaching',
    controls: 'Use industrial grade ladders; 1:4 angle; extend ≥1 m above landing; tie by stiles; maintain 3 points of contact; ladders for access/short duration only; foot up to 5 m.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA42_Ladder_Slip_Roll',
    title: 'RA42 Ladder slip/roll',
    hazard: 'Ladder slipping or rolling during use',
    who: 'Employees, 3rd parties',
    how: 'Smooth/contaminated surfaces; castors/brakes not applied on platform ladders',
    controls: 'Firm, level, clean base; anti-slip feet; lock platform ladder brakes; do not move ladders while occupied; avoid side loading/overreach.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA42_Falling_Objects_From_Height',
    title: 'RA42 Falling objects from height',
    hazard: 'People struck by falling tools/materials',
    who: 'Employees, 3rd parties',
    how: 'Unsecured tools/materials at height; no exclusion below',
    controls: 'Tool lanyards; toe boards; debris nets/chutes; set and maintain exclusion zones; wear head protection.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA42_Fragile_Surfaces',
    title: 'RA42 Fragile surfaces (roofs)',
    hazard: 'Falls through fragile roof materials',
    who: 'Employees, 3rd parties',
    how: 'Access across rooflights/corrugated sheets without protection',
    controls: 'Avoid access where possible; use crawl boards and fall prevention (MEWP/guarded platforms); clearly mark fragile zones; rescue plan.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA42_MEWP_Scaffold_Risks',
    title: 'RA42 MEWP/scaffold risks',
    hazard: 'Entrapment/overturning/collapse using access equipment',
    who: 'Employees, 3rd parties',
    how: 'Incorrect set-up; overload; soft ground; uninspected towers',
    controls: 'Competent erection/inspection; use outriggers/levelling; observe SWL; daily pre-use and statutory inspections; exclude public/pedestrians; emergency lowering procedure.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA42_Adverse_Weather_WAH',
    title: 'RA42 Adverse weather (WAH)',
    hazard: 'Falls/exposure due to wind/rain/ice',
    who: 'Employees, 3rd parties',
    how: 'Slippery surfaces and wind loading at height',
    controls: 'Assess conditions; postpone in high winds/ice; keep platforms clear and non-slip; suitable footwear and clothing.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },

  // RA43 — Cutting concrete/tarmac (road cutting)
  {
    id: 'RA43_Traffic_Accidents_Road_Cutting',
    title: 'RA43 Traffic accidents (road cutting)',
    hazard: 'Collision with public or site traffic',
    who: 'Employees, 3rd parties',
    how: 'Road cutting within live carriageway without adequate traffic management',
    controls: 'Chapter 8/NRSWA compliant TM; cones/signs/barriers; trained TM operatives; safe access/egress; banksman; stop work if TM inadequate.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA43_Dust_Fumes_Road_Cutting',
    title: 'RA43 Dust/fumes (road cutting)',
    hazard: 'Respirable dust and exhaust exposure (incl. RCS when cutting concrete)',
    who: 'Employees, 3rd parties',
    how: 'Dry cutting tarmac/concrete; engine exhaust near workface',
    controls: 'Wet cutting/on-tool extraction; FFP3/P3 RPE with face-fit; position to avoid exhaust; monitor vs WEL; screen to protect public; housekeeping to prevent re-suspension.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA43_Flying_Particles_Road_Cutting',
    title: 'RA43 Flying particles (road cutting)',
    hazard: 'Eye/face injury from projectiles',
    who: 'Employees, 3rd parties',
    how: 'Cutting debris ejected from blade',
    controls: 'Impact eye/face protection; exclusion zone/screens; correct blade selection and condition; correct cutting technique.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA43_Cuts_Kickback_Road_Saw',
    title: 'RA43 Cuts/kickback (road saw/Stihl)',
    hazard: 'Laceration from blade or kickback',
    who: 'Employees, 3rd parties',
    how: 'Incorrect grip/body position; poor maintenance/guarding',
    controls: 'Two-handed grip; correct stance; guards in place; trained/competent operators; pre-use checks; no body alignment with blade.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA43_Fire_Refuelling_Road_Cutting',
    title: 'RA43 Fire during refuelling (road cutting)',
    hazard: 'Ignition of petrol/flammables',
    who: 'Employees, 3rd parties',
    how: 'Hot refuelling; spills; nearby ignition sources',
    controls: 'Refuel in designated area with drip tray; cool before refuelling; control ignition sources; spill kit; replace caps immediately; store fuel correctly.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA43_Public_Exposure_Road_Cutting',
    title: 'RA43 Injury to members of the public (road cutting)',
    hazard: 'Public exposed to cutting operations',
    who: 'Employees, 3rd parties',
    how: 'Uncontrolled pedestrian access to work area',
    controls: 'Barrier and sign work area; maintain pedestrian routes; marshal crossings; stop work if segregation is compromised.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA43_Environmental_Runoff_Slurry',
    title: 'RA43 Environmental runoff (slurry)',
    hazard: 'Pollution from slurry/water run-off',
    who: 'Employees, 3rd parties',
    how: 'Wet cutting water and fines entering drains/land',
    controls: 'Capture/contain slurry; block or protect drains; dispose as per local requirements/COSHH; prevent spread beyond site.',
    action: 'Environmental Lead',
    init: 'medium',
    resid: 'low'
  },

  // RA44 — Use of Rammax (remote trench compactor)
  {
    id: 'RA44_Overturning_Rammax',
    title: 'RA44 Overturning (rammax)',
    hazard: 'Remote compactor overturning in/near trench',
    who: 'Employees, 3rd parties',
    how: 'Operating on steep/undercut faces; soft edges; excessive lift thickness',
    controls: 'Assess trench width/depth and lift thickness; operate from safe position; keep away from edges/voids; retrieval plan; stop blocks and barriers as required.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA44_Runover_Entrapment_Rammax',
    title: 'RA44 Run-over/entrapment (rammax)',
    hazard: 'Operative struck or trapped by unit',
    who: 'Employees, 3rd parties',
    how: 'Poor exclusion; entering trench during operation',
    controls: 'Exclusion zone; never enter trench while operating; remote operator to maintain line-of-sight; emergency stop available and tested.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA44_Loss_Of_Control_Signal',
    title: 'RA44 Loss of control/signal (rammax)',
    hazard: 'Uncontrolled movement due to signal loss/fault',
    who: 'Employees, 3rd parties',
    how: 'Radio failure/interference; control unit fault',
    controls: 'Pre-use function checks; test E-stop; maintain safe standoff; keep receiver/controls within spec range; stop work on malfunction.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA44_Vibration_Noise_Rammax',
    title: 'RA44 Vibration & noise (rammax)',
    hazard: 'Noise exposure and ground vibration effects',
    who: 'Employees, 3rd parties',
    how: 'Prolonged operation near personnel/structures/services',
    controls: 'Hearing protection; maintain distances to sensitive structures/services; monitor for effects; rotate tasks as needed.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA44_Fuel_Fire_Rammax',
    title: 'RA44 Fuel/fire (rammax)',
    hazard: 'Ignition during refuelling/storage',
    who: 'Employees, 3rd parties',
    how: 'Spills; hot surfaces; poor storage',
    controls: 'Refuel in designated area with spill control; cool before refuelling; store fuel correctly; keep extinguishers to hand; clean spills.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA45 — Contact with chemicals (general COSHH)
  {
    id: 'RA45_Skin_Eye_Contact',
    title: 'RA45 Skin/eye contact (chemicals)',
    hazard: 'Chemical burns/dermatitis/eye injury',
    who: 'Employees, 3rd parties',
    how: 'Handling, decanting or splash to unprotected skin/eyes',
    controls: 'COSHH assessment/SDS available; task-specific PPE (gloves/eye/face); eyewash; hygiene and welfare in place; launder or dispose of contaminated clothing.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA45_Inhalation_Exposure',
    title: 'RA45 Inhalation exposure (chemicals)',
    hazard: 'Respiratory irritation/toxicity',
    who: 'Employees, 3rd parties',
    how: 'Vapours/mists/dusts during use/mixing',
    controls: 'Ventilation/LEV; correct RPE to APF required; face-fit and clean-shaven policy; monitor vs WEL; minimise decanting/spray where possible.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA45_Ingestion_Poor_Hygiene',
    title: 'RA45 Ingestion (poor hygiene)',
    hazard: 'Illness from ingestion/hand-to-mouth transfer',
    who: 'Employees, 3rd parties',
    how: 'Eating/drinking/smoking with contaminated hands or PPE',
    controls: 'No eating/drinking/smoking in work area; wash hands with appropriate cleanser before breaks; dedicated clean areas for welfare.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA45_Fire_Explosion_Chemicals',
    title: 'RA45 Fire/explosion (chemicals)',
    hazard: 'Ignition of flammable substances',
    who: 'Employees, 3rd parties',
    how: 'Static/sparks/naked flames near flammables',
    controls: 'Eliminate ignition sources; bond/ground during decanting; use correct extinguishers; hot-work permits where required; store away from heat.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA45_Incompatible_Storage',
    title: 'RA45 Incompatible storage',
    hazard: 'Violent reactions from incompatibles',
    who: 'Employees, 3rd parties',
    how: 'Acids stored with alkalis/oxidisers; poor segregation',
    controls: 'Store per SDS compatibility; dedicated COSHH store; label/segregate; secure from unauthorised access; secondary containment.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA45_Spill_Environmental_Contamination',
    title: 'RA45 Spill/environmental contamination',
    hazard: 'Pollution to land/water/drains',
    who: 'Employees, 3rd parties',
    how: 'Leaks/spills during storage, use or transport',
    controls: 'Spill kits and trained users; bunds/plant nappies; protect/cover drains; waste disposal via licensed carrier with transfer notes.',
    action: 'Environmental Lead',
    init: 'high',
    resid: 'low'
  },
  
  {
    id: 'cuts-metal',
    title: 'Cuts from bare edges of metal',
    hazard: 'Cuts from bare edges of metal.',
    who: 'MVL Employees',
    how: 'Carrying or install of sheet metal/spiral wound ductwork',
    controls: 'Cut 5 resistance gloves are mandatory and to be worn always; these will also protect from cuts when handling ductwork. Long sleeves/gauntlets to be worn whilst carrying or installing ductwork with ‘bare edges’.',
    action: 'Supervisor / Luke Watson',
    init: 'low',
    resid: 'low'
  },
   {
    id: "GENERAL_Slips_On_Wet_Ground",
    title: "Slips on wet ground",
    hazard: "Slipping on wet surfaces",
    who: "Employees, 3rd parties",
    how: "Rainwater, overspill or hose/plant washdown leaving floors/ground wet",
    controls: "Good drainage; regular sweeping/drying; grit mats in welfare areas; restrict traffic until dry; footwear with slip-resistant soles.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Slips_On_Mud",
    title: "Slips on mud",
    hazard: "Slipping on mud build-up",
    who: "Employees, 3rd parties",
    how: "Trafficked plant routes and excavations causing mud transfer",
    controls: "Hardstanding where possible; wheel wash and tracking control; regular brushing of walkways; segregate pedestrian routes.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Slips_Due_To_Ice_Frost",
    title: "Slips due to ice/frost",
    hazard: "Loss of footing in freezing conditions",
    who: "Employees, 3rd parties",
    how: "Frost/ice on approaches, welfare routes or scaffold boards",
    controls: "Grit/salt in cold weather; early inspections; reroute if untreated; display weather alerts; non-slip coverings where required.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Trips_From_Debris",
    title: "Trips from debris",
    hazard: "Tripping over waste or stored materials",
    who: "Employees, 3rd parties",
    how: "Poor housekeeping or unplanned storage blocking walkways",
    controls: "Planned material zones; skip rotation; remove waste daily; enforce clean-as-you-go policy.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Trips_From_Trailing_Cables",
    title: "Trips from trailing cables",
    hazard: "Trailing cables/hoses creating trip hazard",
    who: "Employees, 3rd parties",
    how: "Temporary electrics or hoses routed across walkways",
    controls: "Route overhead or at perimeter; cable ramps/mats; remove when not in use; regular inspections.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Trips_From_Uneven_Ground",
    title: "Trips from uneven ground",
    hazard: "Changes in level or potholes",
    who: "Employees, 3rd parties",
    how: "Ruts left by plant, subsidence or poorly maintained ground",
    controls: "Grade and compact routes; sign/cordon temporary defects; use firm pedestrian walkways.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Trips_From_Poor_Lighting",
    title: "Trips from poor lighting",
    hazard: "Slips/trips due to insufficient illumination",
    who: "Employees, 3rd parties",
    how: "Night work or shaded areas without lighting",
    controls: "Task and route lighting; check illumination before shift; maintain lamps and cabling.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Obstructed_Access_Egress",
    title: "Obstructed access/egress",
    hazard: "Entrapment or delay in emergency exit",
    who: "Employees, 3rd parties",
    how: "Tools/materials blocking escape routes and stair towers",
    controls: "Keep fire routes clear; daily route inspections; signage to keep clear; enforce storage rules.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Slurry_And_Contamination_Underfoot",
    title: "Slurry/contamination underfoot",
    hazard: "Slips from slurry or fines on surfaces",
    who: "Employees, 3rd parties",
    how: "Concrete washout or wet cutting runoff spreading underfoot",
    controls: "Contain washout; direct cutting water to containment; prevent tracking contamination beyond work area.",
    action: "Environmental Lead",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Inadequate_Footwear",
    title: "Inadequate footwear",
    hazard: "Loss of footing due to unsuitable boots",
    who: "Employees, 3rd parties",
    how: "Smooth sole or worn tread in wet/muddy/sloped ground conditions",
    controls: "Safety footwear with slip-resistant sole; monitor wear; replace when tread degraded.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Poor_Housekeeping",
    title: "Poor housekeeping (general)",
    hazard: "General slip/trip risk from uncontrolled debris",
    who: "Employees, 3rd parties",
    how: "Messy workface from poor supervision and no clean-as-you-go",
    controls: "Housekeeping policy; end-of-shift checks; supervisor sign-off; disciplinary escalation for non-compliance.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Spoil_And_Material_Left_On_Walkways",
    title: "Spoil/material left on walkways",
    hazard: "Trips from spilled loads/surplus aggregates",
    who: "Employees, 3rd parties",
    how: "Tracked or spilled material from plant onto walkways",
    controls: "Regular brushing; designated loading/spoil zones; edge boards to contain spill; sweep immediately after spill.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Time_Pressure_Production_Bias",
    title: "Time pressure / production bias",
    hazard: "Rushing work leading to unsafe acts and missed checks",
    who: "Employees, 3rd parties",
    how: "Deadline pressure or bonus incentives causing shortcuts and skipped controls",
    controls: "Plan realistic durations; separate safety from productivity incentives; brief ‘right first time’; supervisor to pace works; stop-work authority respected.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Complacency_Normalisation_Of_Deviation",
    title: "Complacency / normalisation of deviation",
    hazard: "Unsafe practices becoming ‘the norm’ over time",
    who: "Employees, 3rd parties",
    how: "Repeated success without incident causing risk underestimation",
    controls: "Leadership safety tours; rotate tasks; periodic RAMS refresh; targeted toolbox talks after observations; reward hazard reporting, not output.",
    action: "H&S Lead",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Poor_Communication_Language_Barriers",
    title: "Poor communication / language barriers",
    hazard: "Misunderstanding critical instructions or signals",
    who: "Employees, 3rd parties",
    how: "Mixed-language crews; hand signals not standardised; noisy environments",
    controls: "Use visual method statements and pictograms; multilingual briefings; standard hand signals; confirm-understanding checks (teach-back); radios where needed.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Distraction_Mobile_Phones",
    title: "Distraction (mobile phones & devices)",
    hazard: "Loss of situational awareness around plant/edges",
    who: "Employees, 3rd parties",
    how: "Phone use in red zones; music earbuds masking alarms",
    controls: "Red-zone phone ban; approved comms only; dedicated safe phone areas; enforce no-earbuds policy; supervisor spot checks.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Fatigue_Long_Hours",
    title: "Fatigue / long hours",
    hazard: "Slower reactions and poor decisions due to fatigue",
    who: "Employees, 3rd parties",
    how: "Night shifts, extended shifts, insufficient breaks or travel time",
    controls: "Shift limits and minimum rest; fatigue self-check at start; rota planning; extra supervision on nights; micro-breaks for safety-critical tasks.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Stress_Mental_Health",
    title: "Stress & mental health",
    hazard: "Impaired judgment, errors, or absenteeism",
    who: "Employees, 3rd parties",
    how: "Personal stress, workload, bullying, or traumatic events",
    controls: "Mental Health First Aiders; confidential EAP; workload reviews; private welfare space; signpost support; non-punitive reporting culture.",
    action: "HR Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Substance_Impairment_Drugs_Alcohol",
    title: "Substance impairment (drugs & alcohol)",
    hazard: "Reduced coordination and judgment on site",
    who: "Employees, 3rd parties",
    how: "Arriving unfit for work; misuse of prescription meds",
    controls: "Fit-for-work/D&A policy; testing per contract; education on prescription declarations; immediate removal from safety-critical tasks if suspected.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Shortcutting_Risk_Taking",
    title: "Shortcutting / risk-taking",
    hazard: "Bypassing guards, PPE or permit steps",
    who: "Employees, 3rd parties",
    how: "‘Get it done’ culture; perceived hassle with permits/PPE",
    controls: "Make the safe way the easy way (tools to hand, pre-staged PPE); measured permit turnaround; recognise safe behaviours; intervene early.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Authority_Gradient_Cant_Speak_Up",
    title: "Authority gradient / can’t speak up",
    hazard: "Workers do not challenge unsafe instructions",
    who: "Employees, 3rd parties",
    how: "Power distance; fear of blame; new starters or agency staff",
    controls: "Explicit stop-work authority; anonymous reporting; supervisors model ‘thank you for stopping’ responses; buddy mentors for new/young workers.",
    action: "H&S Lead",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Bystander_Effect_Diffusion",
    title: "Bystander effect / diffusion of responsibility",
    hazard: "Nobody intervenes when seeing unsafe acts",
    who: "Employees, 3rd parties",
    how: "Crowded workface; unclear ownership of risk",
    controls: "Allocate task owners in briefings; dynamic risk assessment (point-of-work); encourage ‘name it, stop it, make it safe’; track positive interventions.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Lone_Working_Psychological_Risk",
    title: "Lone working (psychological risk)",
    hazard: "Reduced help-seeking and degraded situational awareness",
    who: "Employees, 3rd parties",
    how: "Working isolated or out-of-hours without support",
    controls: "Check-in schedule; lone worker devices; escalation tree; restrict high-risk tasks when alone; ensure welfare and lighting are adequate.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Bullying_Harassment",
    title: "Bullying & harassment",
    hazard: "Intimidation leading to silence and unsafe compliance",
    who: "Employees, 3rd parties",
    how: "Abusive behaviour from peers or supervisors",
    controls: "Zero-tolerance policy; confidential reporting; swift investigation; leadership standards; refresher briefings on respectful sites.",
    action: "HR Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Cognitive_Overload_Multitasking",
    title: "Cognitive overload / multitasking",
    hazard: "Error-prone work due to excessive task switching",
    who: "Employees, 3rd parties",
    how: "High information load; alarms, radios and paperwork while operating",
    controls: "Assign a spotter or banksman; simplify paperwork at point-of-work; pause rule for critical steps; quiet zone for planning/permits.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Damaged_Cables",
    title: "Damaged or deteriorated cables",
    hazard: "Electric shock or arcing from damaged insulation",
    who: "Employees, 3rd parties",
    how: "Trailing leads crushed by plant or worn through on edges",
    controls: "110V site systems; armoured or HO7RN-F leads; weekly visual checks; replace immediately if damaged.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Improvised_Connections",
    title: "Improvised or makeshift electrical connections",
    hazard: "Shock or fire from unsafe terminations",
    who: "Employees, 3rd parties",
    how: "Unapproved adaptors, taped joints or unauthorised repairs",
    controls: "No re-wiring/DIY repairs on site; only competent electricians; use approved connectors; remove unsafe items immediately.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Overloading_Circuits",
    title: "Overloading of circuits",
    hazard: "Fire or equipment failure",
    who: "Employees, 3rd parties",
    how: "Multiple items powered from a single outlet or spider block",
    controls: "Load management; distribute circuits; use site DBs not domestic boards; check max ratings.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Portable_Lighting_Failure",
    title: "Portable lighting failure",
    hazard: "Sudden loss of illumination causing slips/falls",
    who: "Employees, 3rd parties",
    how: "Temporary lighting not secured or not rated for environment",
    controls: "Use 110V lighting; secure fittings; inspect daily; provide backup lighting for high-risk zones.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Insufficient_Lighting",
    title: "Insufficient lighting for safe work",
    hazard: "Trips or misjudgement in low light",
    who: "Employees, 3rd parties",
    how: "Shadowing, night works, scaffold voids",
    controls: "Lux-level checks; task lighting; tower lighting for access routes; reposition if shadows form.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Contact_With_Live_Parts",
    title: "Contact with live parts",
    hazard: "Electric shock or burns",
    who: "Employees, 3rd parties",
    how: "Live terminals or open DBs exposed during work",
    controls: "Lockable DBs; covers closed and labelled; no energised work by non-electrical staff; test-before-touch.",
    action: "Qualified Electrician",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Water_Ingress_Electrics",
    title: "Water ingress affecting electrics",
    hazard: "Short circuit or shock",
    who: "Employees, 3rd parties",
    how: "Outdoor cables/connectors in wet conditions without IP rating",
    controls: "Use rated IP connectors; elevate off ground; protect from rain/washdown; routine inspections after storms.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Temp_Cables_As_Trip_Hazard",
    title: "Temporary cables creating trip hazard",
    hazard: "Fall due to cable routing",
    who: "Employees, 3rd parties",
    how: "Cables across footpaths or scaffold boards",
    controls: "Overhead routing or cable ramps; fixed runs; remove decommissioned lines; daily housekeeping check.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Incorrect_Voltage",
    title: "Incorrect voltage selection",
    hazard: "Shock severity increased",
    who: "Employees, 3rd parties",
    how: "Use of 230V tools where 110V required",
    controls: "Mandatory 110V on site; transformers positioned off the ground; check plant/tool rating pre-issue.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Unauthorised_Alteration",
    title: "Unauthorised alteration to electrical setup",
    hazard: "Non-compliant temporary system",
    who: "Employees, 3rd parties",
    how: "Workers moving panels, boards or transformers",
    controls: "Only electricians may relocate or alter; permit for changes; isolation before movement; label tamper seals.",
    action: "Qualified Electrician",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Damaged_Lighting_Columns",
    title: "Damaged lighting columns/towers",
    hazard: "Instability or collapse",
    who: "Employees, 3rd parties",
    how: "Vehicle strike or poor foundation/base",
    controls: "Inspect stability; barrier protection near traffic; reposition if soft ground; take out of service if damaged.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Public_Entering_Work_Area",
    title: "Public entering the work area",
    hazard: "Members of the public exposed to live construction hazards",
    who: "Employees, 3rd parties",
    how: "Inadequate fencing/signage allowing public to walk into workface",
    controls: "Secure perimeter; Chapter 8 or HERAS fencing as required; signage and monitored access points; stop work if boundary breached.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Trespass_Children",
    title: "Child trespass / curiosity risk",
    hazard: "Children accessing plant or hazardous areas",
    who: "Employees, 3rd parties",
    how: "Attractive hazards (plant, stacks, ladders) left unsecured out of hours",
    controls: "Remove keys and immobilise plant; lock compounds; inspect perimeter at close of play; remove ladders/ramps.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Uncontrolled_Public_Pedestrian_Routes",
    title: "Uncontrolled public pedestrian routes",
    hazard: "Collision or contact between public and site plant",
    who: "Employees, 3rd parties",
    how: "Shared footpaths or inadequate segregation",
    controls: "Dedicated safe walkways with barrier; signing/marshalling; physical separation from vehicles; shorter haul routes to reduce interface.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Public_Struck_By_Material",
    title: "Public struck by materials",
    hazard: "Falling or projected debris leaving site boundary",
    who: "Employees, 3rd parties",
    how: "Cutting, planing or lifting operations close to perimeter",
    controls: "Secondary containment (debris netting, screens); exclusion zones; schedule high-risk work outside public peak times.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Perimeter_Fence_Failure",
    title: "Perimeter fence failure",
    hazard: "Unauthorised entry through damaged or moved fencing",
    who: "Employees, 3rd parties",
    how: "Wind damage, vehicle strike or deliberate removal",
    controls: "Daily fence inspections; brace in exposed areas; repair immediately; rapid escalation if breach found.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Shared_Access_With_Public",
    title: "Shared access with public / residents",
    hazard: "Conflict at gates/driveways",
    who: "Employees, 3rd parties",
    how: "Resident/retail access shared with deliveries/plant",
    controls: "Banksman on all interfaces; timed deliveries; liaison with residents/businesses; visibility splays maintained.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Aggression_From_Public",
    title: "Aggression or confrontation from public",
    hazard: "Escalation leading to unsafe decisions or harm",
    who: "Employees, 3rd parties",
    how: "Intimidation over noise, access, delays or perceived nuisance",
    controls: "De-escalation training; no retaliation; escalate to site manager; safe retreat policy; signage clarifying works.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Theft_Arson",
    title: "Theft / arson risk",
    hazard: "Loss of plant/materials or fire damage affecting safety",
    who: "Employees, 3rd parties",
    how: "Unsecured site or opportunistic access",
    controls: "Lock/immobilise plant; secure fuel store; CCTV/lighting; asset logs; out-of-hours patrol or alarms.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Media_Filming_Reputational_Risk",
    title: "Media / filming / reputational risk",
    hazard: "Filmed unsafe conditions leading to regulatory action",
    who: "Employees, 3rd parties",
    how: "Public video recording hazardous behaviours",
    controls: "Model safe behaviours; immediate correction; inspectors briefed; visual standards maintained.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Open_Gates_And_Uncontrolled_Access",
    title: "Open gates and uncontrolled access",
    hazard: "Public or delivery vehicles entering unsafely",
    who: "Employees, 3rd parties",
    how: "Gate left open or unattended, especially during breaks",
    controls: "Gatekeeping protocol; banksman present whenever open; close when unsupervised; signage visible externally.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Heat_Stress",
    title: "Heat stress",
    hazard: "Heat exhaustion/dehydration reducing performance and safety",
    who: "Employees, 3rd parties",
    how: "High temperatures, heavy PPE and direct sun during physical tasks",
    controls: "Hydration plan; shaded rest areas; task rotation; lighter PPE where permissible; early/late working windows; monitor for symptoms.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Cold_Stress",
    title: "Cold stress",
    hazard: "Hypothermia/cold injury impacting judgment and dexterity",
    who: "Employees, 3rd parties",
    how: "Low temperatures, wind chill, wet clothing",
    controls: "Thermal layered clothing; waterproofs; heated welfare; warm-up breaks; gloves to maintain dexterity; monitor for shivering/confusion.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_High_Winds",
    title: "High winds",
    hazard: "Loss of control of materials/plant; collapse of temporary items",
    who: "Employees, 3rd parties",
    how: "Wind loading on sheets, barriers, loads and MEWPs",
    controls: "Check wind thresholds for cranes/MEWPs; secure sheeting/barriers; stop lifts above limits; remove/secure loose materials.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Lightning_Risk",
    title: "Lightning risk",
    hazard: "Electrocution from nearby strikes",
    who: "Employees, 3rd parties",
    how: "Working on exposed sites, scaffolds, MEWPs or with long metallic items",
    controls: "Suspend exposed work during electrical storms; retreat to safe shelters/vehicles; isolate cranes/MEWPs; no handling of long metal sections.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_UV_Exposure",
    title: "UV exposure",
    hazard: "Sunburn/skin cancer and glare-induced errors",
    who: "Employees, 3rd parties",
    how: "Extended outdoor work without protection",
    controls: "Long sleeves/neck protection; SPF 30+; shade breaks; sunglasses meeting EN spec; brief on early signs of sun damage.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Flooding_Surface_Water",
    title: "Flooding / surface water",
    hazard: "Drowning/vehicle loss of control and service ingress",
    who: "Employees, 3rd parties",
    how: "Heavy rain/blocked drains causing fast accumulation",
    controls: "Drainage management; protect/cover pits; barriers around inundated areas; stop plant entering flood water; pumps and silt control ready.",
    action: "Environmental Lead",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Storm_Damage_Flying_Debris",
    title: "Storm damage / flying debris",
    hazard: "Impact from unsecured materials",
    who: "Employees, 3rd parties",
    how: "Wind lifts unsecured boards, tins, barriers or signage",
    controls: "End-of-shift tie-down checks; remove lightweight stock to secure stores; brace fencing/signs; postpone exposed tasks.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Fog_Low_Visibility",
    title: "Fog / low visibility",
    hazard: "Vehicle/person collisions due to poor sight lines",
    who: "Employees, 3rd parties",
    how: "Fog/rain/dusk reduces visibility on routes and workfaces",
    controls: "Enhance route/task lighting; reduce speeds; add banksmen on interfaces; pause high-risk movements until visibility improves.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Soft_Ground_Bearing_Capacity",
    title: "Soft ground / bearing capacity loss",
    hazard: "Plant bogging/overturning; collapse at edges",
    who: "Employees, 3rd parties",
    how: "Rain saturates subgrade or undermines edges",
    controls: "Assess ground daily; install mats/stone up routes; increase stand-off from edges; restrict axle loads; engineer review if in doubt.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Drought_Dust_Air_Quality",
    title: "Drought dust / air quality",
    hazard: "Respiratory irritation and reduced visibility",
    who: "Employees, 3rd parties",
    how: "Dry spells causing dust from haul roads and stockpiles",
    controls: "Damping/water bowsers; on-tool extraction; sheeting of loads; RPE where needed; speed control on haul routes.",
    action: "Environmental Lead",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Temporary_Works_Weather_Instability",
    title: "Temporary works weather instability",
    hazard: "Movement or collapse of scaffold/formwork/barriers",
    who: "Employees, 3rd parties",
    how: "Wind/rain affects ties, foundations and bracing",
    controls: "Inspections after weather events; verify ties/anchors; engineer approval before re-use; increase ballast/bracing where required.",
    action: "Temporary Works Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Silt_Runoff_Pollution",
    title: "Silt runoff / pollution",
    hazard: "Environmental contamination of drains/watercourses",
    who: "Employees, 3rd parties",
    how: "Heavy rain mobilises fines from stockpiles and works",
    controls: "Silt fencing/booms; settlement tanks; cover stockpiles; protect drains; inspect after storms; dispose arisings correctly.",
    action: "Environmental Lead",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Uninspected_Temporary_Works",
    title: "Uninspected temporary works",
    hazard: "Failure/collapse due to missing design check or sign-off",
    who: "Employees, 3rd parties",
    how: "Scaffold/formwork/shoring erected but not inspected or tagged",
    controls: "TWC/TWS process; inspection before first use; tagging system; only authorised handover into service.",
    action: "Temporary Works Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Inadequate_Design_Capacity",
    title: "Inadequate design capacity",
    hazard: "Structure overloaded beyond design limit",
    who: "Employees, 3rd parties",
    how: "Incorrect ties, load paths or bracing; unverified capacity",
    controls: "TWC-approved design; design brief and calcs; no modifications without consent; control of imposed loads.",
    action: "Temporary Works Coordinator",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Unauthorised_Modification",
    title: "Unauthorised modification or removal",
    hazard: "Loss of stability after alteration",
    who: "Employees, 3rd parties",
    how: "Operatives remove braces/boards to “make work easier”",
    controls: "No alterations unless authorised by TWC/TWS; signage; inspection after change; training on critical members.",
    action: "Temporary Works Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Improper_Foundations_Bearing",
    title: "Improper foundations/bearing",
    hazard: "Settlement or rotation at base",
    who: "Employees, 3rd parties",
    how: "Scaffold/hoarding/tower placed on soft or unverified ground",
    controls: "Ground bearing assessment; mats or footings; engineered base; reinspect after rainfall.",
    action: "Temporary Works Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Wind_Loading_Stability",
    title: "Wind loading / stability failure",
    hazard: "Collapse in high winds",
    who: "Employees, 3rd parties",
    how: "Sheeted scaffold/hoarding without wind calcs or tie checks",
    controls: "Design wind class; additional ties/bracing; trigger criteria for suspension of work during storms; re-check after weather.",
    action: "Temporary Works Coordinator",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Incorrect_Ties_Anchors",
    title: "Incorrect ties or anchors",
    hazard: "Tie failure leading to collapse",
    who: "Employees, 3rd parties",
    how: "Wrong anchors or poor fixing into masonry/frame",
    controls: "Correct anchor spec; pull tests; competent installers; inspection and recordkeeping.",
    action: "Temporary Works Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Collision_From_Plant",
    title: "Plant collision with temporary works",
    hazard: "Impact leading to collapse or partial failure",
    who: "Employees, 3rd parties",
    how: "Dumpers, MEWPs, or deliveries striking structure",
    controls: "Physical barriers; no-go zones; banksman near edges; high-visibility bases and toe protection.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Poor_Assembly_Competence",
    title: "Poor assembly competence",
    hazard: "Structural weakness from incorrect assembly",
    who: "Employees, 3rd parties",
    how: "Unqualified or unbriefed installers",
    controls: "Competent erection team; supervision; manufacturer guidance followed; toolbox brief before assembly.",
    action: "Temporary Works Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Premature_Loading",
    title: "Premature loading",
    hazard: "Collapse from loading before full strength achieved",
    who: "Employees, 3rd parties",
    how: "Formwork struck early / scaffold loaded before sign-off",
    controls: "Hold points before loading; curing/strength verification; signage restricting access; TWC release only.",
    action: "Temporary Works Coordinator",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Overloading_From_Materials",
    title: "Overloading from stored materials",
    hazard: "Decking/platform collapse",
    who: "Employees, 3rd parties",
    how: "Materials stacked on temporary structure beyond SWL",
    controls: "Clear SWL signage; spot checks; limit pallets/loads; no progressive stockpiling.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Poor_Inspection_Monitoring",
    title: "Poor inspection & monitoring",
    hazard: "Progressive deterioration going unnoticed",
    who: "Employees, 3rd parties",
    how: "Weather, vibration, poor fit-up or loosening of fixings",
    controls: "Planned inspection frequency; visual check after each event; log records; escalation to TWC if movement seen.",
    action: "Temporary Works Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Unauthorised_Access_On_Temporary_Works",
    title: "Unauthorised access on temporary works",
    hazard: "Falls or collapse from mis-use of structure",
    who: "Employees, 3rd parties",
    how: "Members of public or unbriefed workers climbing/using structure",
    controls: "Lockable access; signage; remove ladders/rungs; barrier system; out-of-hours security checks.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: 'hearing-noise',
    title: 'Noise affecting hearing',
    hazard: 'Noises affecting hearing',
    who: 'MVL Employees',
    how: 'Use of power tools and whilst installing ductwork',
    controls: 'Operatives are provided with ear defenders for use whilst using power tools producing noises over 80db and are mandatory when the ELV is above 87db whilst installing.',
    action: 'Supervisor / Luke Watson',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'hand-tools',
    title: 'Injury from powered hand tools',
    hazard: 'Injury from the use of powered hand tools, drills, jigsaws, grinders etc.',
    who: 'MVL Employees',
    how: 'Whilst installing ductwork hand drills used for joining spiral joints, jigsaws to cut ductwork into required sections',
    controls: 'When using this equipment eye protection/impact glasses (BSEN166) plus ear protection whilst using this equipment. Follow individual risk assessment & HAVS sheet for each type of equipment as detailed below. Ensure all equipment is inspected and meets statutory requirements for small power tools (PAT tests).',
    action: 'Supervisor / Luke Watson',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'manual-handling',
    title: 'Injury from moving and lifting',
    hazard: 'Injury from moving and lifting – offloading deliveries of ductwork, metal fabrication',
    who: 'MVL Employees',
    how: 'When moving ductwork/plant to working area or offloading from vehicles. Lifting duct through riser opening',
    controls: 'Ductwork deliveries in transit van under 20kg sections. Ensure operatives are trained in correct methods of manual handling.',
    action: 'Supervisor – Operatives',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'falling-height',
    title: 'Falling from working at heights',
    hazard: 'Falling from working at heights, either Scaffolds or Stepladders',
    who: 'MVL Employees',
    how: 'Whilst working at height falling from working platform as ductwork sections can be big and awkward to install',
    controls: 'Ensure operatives are trained in the safe use of access equipment (PASMA/IPAF) and that the equipment used is maintained, safe for use and free from defects. Make sure working platform allows free movement to allow duct install. Whilst working at height exclusion zones to be placed around MEWP or mobile tower. Tools to be tethered whilst being used when working at height. Stepladders are only to be used as a last resort and require director authorisation.',
    action: 'Supervisor – Trained Operatives',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'dust-inhalation',
    title: 'Breathing problems from dust',
    hazard: 'Breathing problems via inhaling dust',
    who: 'MVL Employees',
    how: 'When drilling into slab for bracketry / general dusty environment',
    controls: 'Whilst drilling operatives to use vac attachments on SDS drills to stop dust at source. FFP3 dust mask also provided. Any operative wearing dust masks to be face fit tested.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'sealant',
    title: 'Use of duct sealant (Mastic)',
    hazard: 'Use of duct sealant (Mastic)',
    who: 'MVL Employees',
    how: 'Whilst sealing ductwork mastic coming into contact with skin/eyes',
    controls: 'Ensure operatives are aware of the hazards attached to the property and supply details of preventative/emergency measures. All operatives will be working alongside manufacturer’s COSHH sheet provided.',
    action: 'Supervisor / Luke Watson',
    init: 'low',
    resid: 'low'
  },
  {
    id: 'waste-materials',
    title: 'Waste materials management',
    hazard: 'Waste Materials causing environmental damage/personal injury',
    who: 'Environment / All contractors',
    how: 'Scrap ductwork, offcuts left on site',
    controls: 'All redundant/waste metal is always to be either disposed of in our specific bins provided on site or removed from site by ourselves (waste carriers license). PPE to be used whilst handling waste materials.',
    action: 'Supervisor',
    init: 'low',
    resid: 'low'
  },
  {
    id: 'work-at-height',
    title: 'Work at height (general)',
    hazard: 'Falls from height (ladders, roofs, leading edges, scaffolds).',
    who: 'MVL employees; other trades; public',
    how: 'Working above ground/through fragile materials; unprotected edges.',
    controls: 'Avoid if practicable; plan & supervise; select correct access (tower, scaffold, MEWP) with edge protection; prevent falls (collective protection first); inspect platforms/ladders; competent users; rescue plan.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'fragile-roofs-leading-edges',
    title: 'Fragile roofs / leading edges',
    hazard: 'Falls through fragile materials or off roof edges.',
    who: 'Roof workers; others nearby',
    how: 'Walking/working on fragile sheets; openings; roof lights.',
    controls: 'Avoid access if possible; demarcate; use platform staging, covers and edge protection; fall restraint/AR where required; trained persons only; weather checks.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'slips-trips',
    title: 'Slips, trips & falls (same level)',
    hazard: 'Slips/trips on uneven, wet or obstructed surfaces.',
    who: 'All site personnel; visitors',
    how: 'Poor housekeeping; trailing leads; mud/wet; uneven ground.',
    controls: 'Plan routes; good housekeeping; suitable lighting; cable management; grit/clean spillages; keep access/egress clear; sensible footwear.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'manual-handling',
    title: 'Manual handling',
    hazard: 'MSD injuries from lifting/carrying/pushing/pulling.',
    who: 'MVL employees',
    how: 'Handling heavy/awkward items; poor posture or twisting.',
    controls: 'Avoid where possible; use mechanical aids; team lifts; plan route; reduce load size; training; rotate tasks.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'silica-dust-rcs',
    title: 'Construction dust (RCS/silica)',
    hazard: 'Respirable crystalline silica causing lung disease.',
    who: 'Cutting/drilling crews; nearby trades',
    how: 'Cutting/grinding concrete/stone; dry sweeping.',
    controls: 'COSHH: wet cutting or on-tool LEV; task-matched RPE (fit-tested); enclosure/segregation; housekeeping (no dry sweeping); health surveillance where required.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'noise',
    title: 'Noise exposure',
    hazard: 'Noise-induced hearing loss/tinnitus.',
    who: 'Tool operators; nearby workers',
    how: 'Powered tools/plant; impact processes.',
    controls: 'Eliminate/substitute; quieter tools; time/distance; barriers; hearing protection programme per CNAWR; information & training; health surveillance where indicated.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'havs',
    title: 'Hand–arm vibration (HAVS)',
    hazard: 'Vascular/nerve damage from vibration.',
    who: 'Operatives using vibrating tools',
    how: 'Breakers/grinders/drills/compactors.',
    controls: 'Plan to avoid; low-vibration tools/consumables; trigger-time limits vs EAV/ELV; maintenance; warm/dry hands; job rotation; health surveillance.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'asbestos-suspect',
    title: 'Asbestos – suspect/encounter',
    hazard: 'Exposure to asbestos fibres.',
    who: 'All trades; building occupants',
    how: 'Disturbing ACMs during refurbishment/demolition.',
    controls: 'Check survey/refurb-demo info; stop work if suspect; follow Asbestos Essentials; only trained staff for non-licensed tasks; licensed contractor where required; control/contain, notify where applicable; waste via licensed route.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'excavations',
    title: 'Excavations',
    hazard: 'Collapse, falls into, falling materials, services strike.',
    who: 'Groundworkers; plant ops; public',
    how: 'Unsupported sides; poor access; service hits.',
    controls: 'Plan; shore/batter/box; daily inspections by competent person; barriers & edge protection; safe access/egress; spoil set-back; locate/mark services (plans + CAT & Genny) per HSG47.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'underground-services',
    title: 'Underground services (HSG47)',
    hazard: 'Strike to electric/gas/water/telecoms.',
    who: 'Groundworkers; plant ops',
    how: 'Excavation without proper locate/identify.',
    controls: 'Plan; utility plans; survey & mark; safe digging technique; permit to dig; supervision; isolation/consents if needed; maintain separation distances.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'site-traffic',
    title: 'Plant & site traffic',
    hazard: 'People struck by vehicles/plant.',
    who: 'All site personnel; visitors; public',
    how: 'Mixed routes; reversing; blind spots.',
    controls: 'Safe site, safe vehicle, safe driver: segregate pedestrians/vehicles; one-way systems; banksman only where unavoidable; reversing aids; speed control; exclusion zones; competent operators.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'mewp',
    title: 'MEWPs',
    hazard: 'Falls, overturning, entrapment/crushing.',
    who: 'MEWP operators; spotters',
    how: 'Incorrect selection/setup; overhead obstructions; terrain.',
    controls: 'Select suitable MEWP; ground assessment; entrapment controls; edge protection; harness per manufacturer; exclusion zones; trained/competent; pre-use checks.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'scaffolding',
    title: 'Scaffolds / edge protection',
    hazard: 'Falls from platforms or during erection/alteration.',
    who: 'Scaffolders; users',
    how: 'Missing guardrails/toe boards; unsafe methods.',
    controls: 'Erect/alter/dismantle by competent scaffolders following NASC SG4; inspections; complete guardrails/toe boards; safe access; user pre-use checks.',
    action: 'Scaffolding Contractor – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'electricity-temp',
    title: 'Temporary electrics',
    hazard: 'Electric shock, burns, fire.',
    who: 'All trades; public',
    how: 'Damaged cables/leads; wet conditions; incorrect protection.',
    controls: 'Design & install to HSG141; 110V CTE where practicable; RCDs; IP-rated equipment; cable management; inspections/testing; competent electricians.',
    action: 'Site Manager – Electrical Contractor',
    init: 'high', resid: 'low'
  },
  {
    id: 'hot-works',
    title: 'Hot works (fire risk)',
    hazard: 'Ignition causing fire; burns; fumes.',
    who: 'Welders; roofers; nearby trades; public',
    how: 'Sparks/heat near combustibles; inadequate fire watch.',
    controls: 'Eliminate or control by permit-to-work; clear/cover combustibles; fire watch during and after (per HSG168); extinguishers/alarms; local extraction for fumes.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'confined-spaces',
    title: 'Confined spaces',
    hazard: 'Toxic/flammable atmosphere; oxygen deficiency; engulfment.',
    who: 'Entrants; standby',
    how: 'Tanks, voids, manholes, ducts.',
    controls: 'Avoid entry where possible; permit; testing/monitoring; isolation; ventilation; rescue plan & equipment; trained/competent entrants & attendant.',
    action: 'Permit Issuer – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'cement-dermatitis',
    title: 'Cement / wet concrete (dermatitis & burns)',
    hazard: 'Skin irritation/alkali burns; chromium VI sensitisation.',
    who: 'Concrete/mortar workers',
    how: 'Skin contact with wet cement/concrete.',
    controls: 'COSHH: avoid contact; impervious gloves/sleeves; barrier creams aren’t PPE; wash facilities; clean contaminated clothing; training; first aid for cement burns.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'isocyanates',
    title: 'Isocyanates (PU paints/foams) – spraying',
    hazard: 'Occupational asthma/respiratory irritation; skin/eye effects.',
    who: 'Sprayers; nearby trades',
    how: 'Aerosol/mist generation during spraying.',
    controls: 'COSHH: avoid or use low-isocyanate products; enclosure/LEV; air-fed RPE where required; skin/eye protection; exclusion zones; health surveillance for asthma.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'duct-handling-sharp-edges',
    title: 'Sheet metal handling (sharp edges)',
    hazard: 'Lacerations from sharp duct edges, coil & coil-type fittings.',
    who: 'Duct fitters; mates; delivery crews',
    how: 'Manual handling of unprotected edges; handling without cut-resistant gloves.',
    controls: 'Gloves with cut protection; sleeves; deburr where practicable; use stillages & edge protectors; safe storage & segregation; mechanical aids for packs.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'overhead-lift-duct-sections',
    title: 'Lifting & presenting duct overhead',
    hazard: 'Crush/strain injuries; dropped loads; pinch points.',
    who: 'Fitters; spotters; others below',
    how: 'Lifting with genie lifts/chain blocks; fingers in flange pinch points.',
    controls: 'Plan lift; rated lifting aids; exclusion zone; tag-lines; hands-clear policy at mating flanges; competent banksman; good comms.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'supports-hangers',
    title: 'Supports & hangers (overhead drilling/anchoring)',
    hazard: 'Falling objects; silica dust; eye injuries.',
    who: 'Fitters; nearby trades',
    how: 'Overhead drilling into concrete/steel; incorrect anchor selection or torque.',
    controls: 'Select anchors per design/manufacturer; torque to spec; proof test where required; manage dust (on-tool extraction/wet methods); eye/face protection; keep below area clear.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'pat-fixings',
    title: 'Cartridge-operated fixings (if used)',
    hazard: 'Penetrating injury; ricochet; noise.',
    who: 'Trained fixers; anyone nearby',
    how: 'Using PAT tools for brackets into steel/concrete.',
    controls: 'Trained/authorised users only; correct cartridge & fastener; never carry loaded; misfire procedure; hearing/eye protection; controlled storage of cartridges; exclusion zone.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'ladder-wa-h-balancing',
    title: 'Working at height (fixing/balancing)',
    hazard: 'Falls from steps/ladders/platforms.',
    who: 'Fitters; commissioning engineers',
    how: 'Short-duration fixings; taking readings at terminals; three-point contact lost.',
    controls: 'Avoid WAH where possible; use MEWP/tower if >short duration or two-handed work; ladder only for light, short tasks on suitable footing; pre-use checks; do not overreach.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'mewp-duct-install',
    title: 'MEWP use for duct install',
    hazard: 'Entrapment; overturning; fall from platform.',
    who: 'Operators; spotters',
    how: 'Operating near ceilings/steel; obstructed travel; unsuitable ground.',
    controls: 'Select right MEWP; ground assessment; entrapment controls; harness per manufacturer (boom types); keep within SWL; exclusion zones; trained/competent; pre-use checks.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'sealants-adhesives',
    title: 'Sealants/adhesives & cleaners (COSHH)',
    hazard: 'Solvent vapours; skin/eye irritation; fire/explosion.',
    who: 'Duct installers; cleaners',
    how: 'Applying solvent-containing mastics/cleaners; poor ventilation; ignition sources.',
    controls: 'Check SDS & COSHH; use low-VOC where possible; ventilation/LEV; no ignition sources; flammables stored per rules; gloves/eye protection; hygiene/wash-ups.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'mineral-wool-insulation',
    title: 'Duct insulation (mineral wool)',
    hazard: 'Respiratory/skin/eye irritation from fibres.',
    who: 'Laggers; fitters nearby',
    how: 'Cutting/handling mineral wool; airborne fibres in enclosed areas.',
    controls: 'Minimise disturbance; sharp knives not power tools; damping/clean-as-you-go; RPE where needed; long sleeves/gloves/goggles; welfare for washing; waste double-bagged.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'pressure-testing-ducts',
    title: 'Duct leakage/pressure testing',
    hazard: 'Stored energy release; end caps/blanking plates ejecting; noise.',
    who: 'Commissioning team; others nearby',
    how: 'Pressurising test sections; failure of blanks/temporary joints; overpressure.',
    controls: 'Written test plan; rated blanks & restraints; controlled area; calibrated gauges; step-up pressurisation; remote stand-clear during hold; depressurise before adjustments.',
    action: 'Commissioning Engineer – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'commissioning-balancing',
    title: 'Air balancing & setting to work',
    hazard: 'Falls (access), noise, contact with moving plant.',
    who: 'Commissioning engineers; fitters',
    how: 'Accessing terminals high level; starting/stopping AHUs/fans.',
    controls: 'Follow CIBSE/BSRIA procedures; isolate before access to moving parts; confirm guards; measured control of fan speeds; secure access equipment; keep tools tethered aloft.',
    action: 'Commissioning Engineer – Supervisor',
    init: 'medium', resid: 'low'
  },
  {
    id: 'fire-dampers-access',
    title: 'Fire/smoke dampers – install & access',
    hazard: 'Compromised fire strategy; inaccessible test points.',
    who: 'Installers; future maintenance teams',
    how: 'Incorrect orientation/clearances; no access for testing/reset.',
    controls: 'Install per design/manufacturer; provide compliant access doors; maintain clearances; coordinate fire stopping; label/records; do not obstruct with services.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'duct-cleanliness-tr19',
    title: 'Duct cleanliness & protection (TR19 / DW144)',
    hazard: 'Contamination of new systems; hygiene risks.',
    who: 'Installers; building users',
    how: 'Open duct ends; debris ingress during install/fit-out.',
    controls: 'Cap/seal duct ends in storage & install; keep internal surfaces clean; provide access doors as required; clean pre-commissioning where specified; avoid cross-contamination on tie-ins.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'rcs-from-drilling',
    title: 'Silica dust (RCS) from drilling/chasing',
    hazard: 'Lung disease incl. silicosis, COPD, cancer.',
    who: 'Drillers; nearby trades',
    how: 'Dry coring/drilling concrete/brick without controls.',
    controls: 'On-tool extraction or wet methods; task-matched RPE; segregate/enclose; housekeeping (no dry sweeping); health surveillance where indicated.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'noise-havs-tools',
    title: 'Noise & HAVS – cutting, drilling, grinding',
    hazard: 'Hearing damage; hand-arm vibration syndrome.',
    who: 'Installers; others nearby',
    how: 'Powered cutting/drilling/grinding; prolonged trigger time.',
    controls: 'Quieter/lower-vibration tools & consumables; time limits vs EAV/ELV; maintenance; gloves for grip/warmth; rotate tasks; hearing protection programme & signage.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'ttm-setup-live-carriageway',
    title: 'TTM set-up on live carriageway (Red Book/Chap 8)',
    hazard: 'Traffic striking workers/plant; wrong layout causing collisions.',
    who: 'Groundworkers; traffic marshals; road users; pedestrians',
    how: 'Poor signing/lighting/guarding; inadequate tapers; wrong lane closures.',
    controls: 'Plan to Red Book & TSM Ch.8; approved TM layout/drawing; trained/qualified TM operatives (NRSWA O1/S1 or NHSS 12D as applicable); install in correct sequence; inspection & maintenance of signs; remove when not needed.',
    action: 'Traffic Management Contractor – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'pedestrian-management-footway',
    title: 'Pedestrian management / footway closures',
    hazard: 'Public struck by vehicles or falls into works; inaccessible routes.',
    who: 'Members of the public incl. disabled users; workers',
    how: 'Insufficient guarding/width; ramps too steep; poor lighting or diversions.',
    controls: 'Pedestrian routes min widths; ramps/kerb drops; tactile/accessible provision; safe crossings; guard rails; lighting at night; clear diversion signing; keep routes clear & slip-free.',
    action: 'Site Manager – TM Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'hsg47-locate-detect',
    title: 'Underground services (HSG47)',
    hazard: 'Electric shock/burns, gas release, flooding, telecoms damage.',
    who: 'Groundworkers; plant ops; public nearby',
    how: 'Excavating without plan/locate/confirm; incorrect hand-digging.',
    controls: 'Obtain & review up-to-date plans; mark routes; CAT & Genny (and GPR where needed); permit-to-dig; trial holes; isolate where possible; hand-dig near expected services; maintain separation; supervise.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'permit-schemes-nrswa',
    title: 'Street works permits / notices (NRSWA/Permit schemes)',
    hazard: 'Uncoordinated works causing congestion & unsafe set-ups.',
    who: 'Public; workers; road users',
    how: 'Working without permit/permission; non-compliant conditions.',
    controls: 'Obtain permits/permissions; comply with permit conditions & times; coordinate with HA & utilities; display site info; record inspections; reinstate within timescales.',
    action: 'Site Manager – Permit Coordinator',
    init: 'medium', resid: 'low'
  },
  {
    id: 'excavation-highway',
    title: 'Excavations in carriageway/footway',
    hazard: 'Trench collapse; falls into excavation; struck by falling materials.',
    who: 'Groundworkers; pedestrians; road users',
    how: 'Unsupported sides; spoil too close; inadequate barriers.',
    controls: 'Plan support (shoring/boxes) or batter; competent person daily checks; edge protection/barriers; safe access/egress (ladders at correct spacing); spoil set-back; inspections after rain/traffic vibration.',
    action: 'Supervisor – Competent Person',
    init: 'high', resid: 'medium'
  },
  {
    id: 'road-plates',
    title: 'Road plates over openings',
    hazard: 'Vehicle/pedestrian accidents from plate movement or deflection.',
    who: 'Road users; pedestrians; workers',
    how: 'Underrated plates; inadequate fixings/anti-skid; high approach speeds.',
    controls: 'Engineer selection & rating; secure/anchor; anti-skid; manage approach speeds (signs, limits, ramps) or recess plates; inspect & maintain; noise damping where needed.',
    action: 'Site Manager – TM Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'portable-signals-shuttle',
    title: 'Portable signals / shuttle working',
    hazard: 'Head-on collisions / rear-end shunts / pedestrian conflicts.',
    who: 'Road users; pedestrians; workers',
    how: 'Incorrect signal spacing/positioning; poor intergreens; sighting issues.',
    controls: 'Use approved portable signals; set up per design; correct tapers & head siting; timing/intergreens set; test & monitor flows; provide pedestrian phases where required.',
    action: 'Traffic Management Contractor – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'public-interface',
    title: 'Public interface & site security',
    hazard: 'Members of public entering work area or contacting hazards.',
    who: 'Public; vulnerable users; workers',
    how: 'Inadequate barriers/info; material storage in public route.',
    controls: 'Robust barriers/guarding; clear signage & contact board; secure materials/plant; marshal at accesses; keep footways/driveways serviceable or provide alternatives.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'plant-interface-highway',
    title: 'Plant & deliveries in live highway',
    hazard: 'People struck by moving plant/vehicles.',
    who: 'Workers; public; drivers',
    how: 'Reversing; poor segregation; blind spots; uncontrolled access.',
    controls: 'Defined access/egress; banksman where unavoidable; reversing aids; exclusion zones; one-way systems; brief drivers; schedule deliveries off-peak; cleanse road as needed.',
    action: 'Site Manager – Traffic Marshal',
    init: 'high', resid: 'low'
  },
  {
    id: 'night-work-lighting-fatigue',
    title: 'Night work: lighting & fatigue',
    hazard: 'Poor visibility leading to collisions; fatigue-related errors.',
    who: 'Workers; road users; public',
    how: 'Insufficient lighting/glare; extended shifts; circadian disruption.',
    controls: 'Task & route lighting without glare to traffic; reflective PPE; noise controls for residents; fatigue plan (shifts/breaks/fit-for-work); night TM checks.',
    action: 'Site Manager – TM Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'confined-spaces-highway',
    title: 'Confined spaces (manholes/ducts)',
    hazard: 'Toxic/flammable atmospheres; oxygen deficiency; engulfment.',
    who: 'Entrants; standby',
    how: 'Entry to chambers/culverts without controls.',
    controls: 'Avoid entry if possible; permit system; atmosphere testing/monitoring; isolation; ventilation; rescue plan & equipment; trained entrants & attendant.',
    action: 'Permit Issuer – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'bitumen-hot-works-reinstatement',
    title: 'Bitumen/asphalt reinstatement (hot works)',
    hazard: 'Burns; fire; fume exposure.',
    who: 'Pavers; groundworkers; public near site',
    how: 'Handling hot materials; ignition near combustibles.',
    controls: 'Hot-work procedures; PPE incl. heat-resistant gloves/face/arms; control ignition sources; safe storage; local extraction/ventilation; fire extinguishers; first aid for burns.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'rcs-breaking-cutting',
    title: 'Breaking/cutting in highway (RCS, noise, HAVS)',
    hazard: 'Silica dust inhalation; hearing damage; vibration injury.',
    who: 'Groundworkers; nearby public',
    how: 'Dry cutting/breaking with discs; prolonged trigger time.',
    controls: 'Wet cutting or on-tool extraction; task-matched RPE; noise controls & hearing protection; low-vibration tools; trigger-time limits vs EAV/ELV; housekeeping (no dry sweeping).',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'service-strike-emergency',
    title: 'Service strike – emergency actions',
    hazard: 'Fire/explosion/electrocution; gas release; flooding.',
    who: 'Workers; public; emergency responders',
    how: 'Damage to LV/HV, gas, water or comms while excavating.',
    controls: 'STOP work; evacuate & cordon; call emergency numbers & DNO/gas transporter; remove ignition sources; briefed response plan; incident reporting & investigation; review controls before restart.',
    action: 'Supervisor – Site Manager',
    init: 'high', resid: 'low'
  },
  {
    id: 'weather-winter-heat',
    title: 'Weather – winter/heat/rain on highways',
    hazard: 'Slips; loss of control; heat stress/hypothermia.',
    who: 'Workers; public on diverted routes',
    how: 'Ice/snow/rain on routes; hot weather; poor visibility.',
    controls: 'Gritting & anti-slip; keep drainage clear; adjust TM for visibility; shade/water/rest in heat; cold-weather PPE; stop in severe conditions.',
    action: 'Site Manager – Supervisor',
    init: 'medium', resid: 'low'
  },
  {
    id: 'glass-handling-glazing',
    title: 'Glass handling & glazing',
    hazard: 'Cuts/lacerations; glass breakage; dropped panes.',
    who: 'Installers; helpers; public below',
    how: 'Manually moving panes/IGUs; poor stacking; no edge protection.',
    controls: 'Use A-frames/stillages & rated suction lifters; cut-resistant gloves/sleeves; edge protection; exclusion zone below; store/transport upright; team lifts & manual-handling plan.',
    action: 'Supervisor – Installers',
    init: 'high', resid: 'low'
  },
  {
    id: 'remove-existing-frames',
    title: 'Removal of existing frames & sashes',
    hazard: 'Falling glass/materials; sharp edges; unexpected services.',
    who: 'Installers; public in vicinity',
    how: 'Uncontrolled release when cutting out frames; debris dropping externally.',
    controls: 'De-glaze first; tape/film panes before cuts; protective sheeting & debris nets; control zone below; methodical cut sequence; check for services/alarms to frames.',
    action: 'Supervisor – Installers',
    init: 'high', resid: 'low'
  },
  {
    id: 'work-at-height-window-install',
    title: 'Work at height for installs',
    hazard: 'Falls from ladders/towers/MEWPs; dropped tools.',
    who: 'Installers; public below',
    how: 'Overreaching from ladders; two-hand tasks on ladders; poor footing.',
    controls: 'Ladders only for short, light tasks; use tower/MEWP for two-hand fitting; pre-use checks; secure footing; tool lanyards aloft; keep below area cordoned.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'scaffolds-access-edges',
    title: 'Scaffolds/edge protection (upper floors)',
    hazard: 'Falls from platforms/edges.',
    who: 'Installers; other trades',
    how: 'Missing guardrails/toe boards; moving frames through openings.',
    controls: 'Provide suitable working platforms with full guardrails; internal/external edge protection at openings; trained users; inspections and handover.',
    action: 'Principal Contractor – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'temporary-works-propping-lintels',
    title: 'Temporary works (propping for lintels/openings)',
    hazard: 'Partial collapse; falling masonry.',
    who: 'Installers; other trades; public',
    how: 'Cutting out supports without design/permits.',
    controls: 'Temporary works design/brief; competent install of props/needles; permit to load; inspection records; exclusion zones; follow designer limits/sequence.',
    action: 'Site Manager – Temporary Works Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'wood-dust-joinery',
    title: 'Wood dust (cutting/trimming on site)',
    hazard: 'Asthma; cancer risk (hardwood); irritation.',
    who: 'Joiners; nearby trades',
    how: 'Cutting/sanding timber/MDF without LEV or RPE.',
    controls: 'On-tool extraction/LEV; vacuum (H-class) not sweeping; task-matched RPE; keep below WELs; health surveillance where indicated; housekeeping.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'saws-puwer',
    title: 'Mitre/circular saws (PUWER)',
    hazard: 'Contact with blade; kickback; ejection.',
    who: 'Joiners; others nearby',
    how: 'Defeated guards; poor support; wrong blades.',
    controls: 'Guards in place/functional; correct blade for material; stable work support; push-sticks/holds; trained/authorized users; regular checks & isolation for blade changes.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'nail-guns',
    title: 'Nail guns (1st/2nd fix)',
    hazard: 'Penetrating injury; ricochet; eye injury; noise.',
    who: 'Users; nearby trades',
    how: 'Contact-trip firing; defeating safety; poor line-of-fire control.',
    controls: 'Prefer sequential trigger; eye/face & hearing protection; no mods; secure work; clear line-of-fire; training and misfire procedure; store/isolated when not in use.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'silica-reveals',
    title: 'Silica dust (raking reveals/chases)',
    hazard: 'RCS inhalation (silicosis/COPD/cancer).',
    who: 'Joiners; others nearby',
    how: 'Dry cutting/grinding masonry for frames/packers/fixings.',
    controls: 'Wet cutting or on-tool extraction; task-matched RPE; enclosure/segregation; avoid dry sweeping (use class H vac); health surveillance where required.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'adhesives-foams',
    title: 'PU foams/adhesives & cleaners (COSHH)',
    hazard: 'Isocyanate/solvent vapours; skin/eye irritation; flammability.',
    who: 'Installers; others nearby',
    how: 'Using expanding foam/sealants/cleaners in poorly ventilated areas.',
    controls: 'Check SDS; ventilation/LEV; no ignition sources; suitable gloves/eye protection; low-VOC/low-MDI where possible; safe storage & waste.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'noise-havs-joinery',
    title: 'Noise & HAVS (portable tools)',
    hazard: 'Hearing damage; hand–arm vibration.',
    who: 'Tool users; others nearby',
    how: 'Repeated cutting/sanding/fixing with powered tools.',
    controls: 'Quieter/low-vibration kit & consumables; trigger-time limits vs EAV/ELV; maintenance/sharp blades; hearing protection programme; task rotation; warm/dry hands.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'occupied-premises',
    title: 'Occupied premises / public interface',
    hazard: 'Public entering work area; slips; falling objects.',
    who: 'Building users; visitors; installers',
    how: 'Working through openings/routes; inadequate segregation.',
    controls: 'Barriers/lock-off rooms; signed diversions; manage escape routes/alarms; tidy leads; timed noisy/dusty works; info to occupants; DBS rules where applicable.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'fire-safety-small-works',
    title: 'Fire safety during small works',
    hazard: 'Ignition/spread; blocked escape routes.',
    who: 'Installers; occupants',
    how: 'Hot air guns for paint; adhesives/solvents; blocking exits.',
    controls: 'Fire risk assessment; keep exits clear; control ignition sources; hot-work permit where needed; extinguishers; housekeeping; out-of-hours checks if required.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'asbestos-suspect-refurb',
    title: 'Asbestos – suspect during refurb',
    hazard: 'Fibre exposure from ACMs.',
    who: 'Joiners; occupants',
    how: 'Disturbing ACMs (e.g., soffits, panels, textured coatings) when replacing frames.',
    controls: 'Refurb/demolition survey before disturbance; stop if suspect found; follow Asbestos Essentials for non-licensed tasks; licensed contractor where required; waste via licensed route.',
    action: 'Client/PC – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'lead-paint-older-premises',
    title: 'Lead in old paint (pre-1980s)',
    hazard: 'Lead dust/fume exposure.',
    who: 'Joiners; building users (especially children)',
    how: 'Dry sanding/heat guns when stripping frames/doors.',
    controls: 'Avoid full strip; wet-abrasive/score & overcoat; control dust/fume; hygiene/wash-ups; suitable RPE; waste handling; consider CLAW requirements if significant exposure.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'manual-handling-frames-doors',
    title: 'Manual handling of frames & doors',
    hazard: 'MSD strains; crush/pinch injuries.',
    who: 'Installers',
    how: 'Carrying awkward/heavy units; twisting in stairwells.',
    controls: 'Team lifts; route planning; handles/suction aids; mechanical aids where possible; break down to manageable components; rotate tasks.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  /* ---------- BAM: mapped to BAM Life Saving Rules ---------- */
  {
    id: 'bam-wah',
    title: 'BAM – Working at height',
    hazard: 'Falls from ladders/platforms/leading edges; dropped objects.',
    who: 'Site operatives; others below',
    how: 'Two-hand tasks from ladders; incomplete edge protection; unsecured tools.',
    controls: 'Plan to avoid; use MEWP/tower/scaffold with full edge protection; tie-off when required; tool tethering; pre-use & formal inspections; clear drop zones; stop if conditions change.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'bam-lifting',
    title: 'BAM – Lifting operations & suspended loads',
    hazard: 'Crush/struck-by from load swing or failure.',
    who: 'Slingers/signallers; riggers; all near lift zone',
    how: 'Standing under/near suspended load; wrong accessories; poor comms.',
    controls: 'Lift plan & competent AP/SSS; exclusion zones; rated kit & inspections; tag-lines; single point of command; weather/ground checks; no one under loads.',
    action: 'Appointed Person – Slinger/Signaller',
    init: 'high', resid: 'low'
  },
  {
    id: 'bam-veh-ped',
    title: 'BAM – Vehicles & pedestrians (exclusion zones)',
    hazard: 'People struck by plant/vehicles.',
    who: 'All personnel; visitors',
    how: 'Mixed routes; reversing; blind spots; crossing active work areas.',
    controls: 'Segregated routes; banksman only where unavoidable; one-way systems; speed limits; marked EZ/fatal zones; briefed drivers; lighting & signage.',
    action: 'Site Manager – Traffic Marshal',
    init: 'high', resid: 'low'
  },
  {
    id: 'bam-dropped-objects',
    title: 'BAM – Falling/dropped objects',
    hazard: 'Injury from materials/tools falling from height.',
    who: 'Workers below; public at boundary',
    how: 'Unsecured tools/materials; poor housekeeping on platforms.',
    controls: 'Tool lanyards; toe boards/brick guards/debris nets; sealed containers; exclusion/drop zones; housekeeping; controlled lifts; inspect fixings.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'bam-energised',
    title: 'BAM – Work on/near energised lines',
    hazard: 'Electric shock/arc flash; burns; fire.',
    who: 'Electricians; M&E; other trades nearby',
    how: 'Work on/near live systems; defeated isolation or covers.',
    controls: 'Plan and isolate (LOTO); prove dead; barriers/insulation; competent persons; live work only by exception under control; suitable PPE; permits & testing.',
    action: 'Electrical Supervisor – Authorised Persons',
    init: 'high', resid: 'low'
  },

  /* ---------- Wates: aligned to Visual Standards & Zero Harm themes ---------- */
  {
    id: 'wates-scaffold',
    title: 'Wates – Scaffold management (SG4/TG20)',
    hazard: 'Falls from incomplete scaffolds; falling materials to public/workers.',
    who: 'Scaffolders; users; public',
    how: 'Partial handovers; missing guardrails/toe boards; poor access.',
    controls: 'Design & handover; SG4/TG20 compliance; double guardrails/toe boards; stair access with gates; exclusion/fatal zones; brick guards/fans; 7-day & after-event inspections.',
    action: 'Scaffold Contractor – Temp Works/Site Manager',
    init: 'high', resid: 'low'
  },
  {
    id: 'wates-public-protection',
    title: 'Wates – Public protection & segregation',
    hazard: 'Members of public entering works; struck-by or falls into works.',
    who: 'Public; visitors; workers',
    how: 'Inadequate barriers/routes; working over occupied areas.',
    controls: 'Robust barriers & signage; protected walkways; timed noisy/dusty works; debris control; banksman at interfaces; info boards; housekeeping on access/egress.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'wates-wah-mewps',
    title: 'Wates – WAH & MEWPs for façade/fit-out',
    hazard: 'Falls, entrapment, dropped tools.',
    who: 'MEWP operators; trades aloft; ground workers',
    how: 'Unsuitable machine/ground; overreaching; no drop-zone.',
    controls: 'Select suitable MEWP; ground assessment; entrapment control; harness per manufacturer (booms); tool tethering; defined drop/exclusion zones; pre-use checks.',
    action: 'Supervisor – MEWP Operator',
    init: 'high', resid: 'low'
  },
  {
    id: 'wates-lifting-plant',
    title: 'Wates – Lifting of frames/plant',
    hazard: 'Load drop; crush/pinch injuries.',
    who: 'Slingers; fitters; nearby trades',
    how: 'Incorrect slinging; no EZ; conflicting activities.',
    controls: 'Lift plan; competent slinger/signaller; EZ & briefed interfaces; rated accessories; weather stop rules; clear line-of-fire; tag-lines where needed.',
    action: 'Appointed Person – Slinger/Signaller',
    init: 'high', resid: 'low'
  },

  /* ---------- SES Engineering Services (M&E contractor risk profile) ---------- */
  {
    id: 'ses-energised-work',
    title: 'SES – Energised systems / electrical isolation',
    hazard: 'Electric shock/arc flash; burns; secondary fire.',
    who: 'Electricians; commissioning; other trades nearby',
    how: 'Work on live or not-proved-dead circuits; temporary supplies.',
    controls: 'Permit/LOTO; prove dead; insulated tools & barriers; competent authorised persons; live work only by exception; arc-rated PPE where required; test & re-energise controls.',
    action: 'Electrical Supervisor – AP/Competent Person',
    init: 'high', resid: 'low'
  },
  {
    id: 'ses-hot-works',
    title: 'SES – Hot works (braze/weld/cut)',
    hazard: 'Ignition, fire/smoke; burns; fumes.',
    who: 'M&E installers; others nearby',
    how: 'Brazing near combustibles; poor fire watch.',
    controls: 'Hot-work permit; clear/cover combustibles; extinguishers; LEV/ventilation; fire watch during & after; gas management; atmosphere tests where needed.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'ses-mewp-wah',
    title: 'SES – MEWPs & WAH for services install',
    hazard: 'Falls/entrapment; dropped tools.',
    who: 'MEWP users; installers; people below',
    how: 'Two-hand tasks from steps; overhead obstructions; unsuitable reach.',
    controls: 'Use MEWP/tower for two-hand tasks; select correct machine; entrapment controls; tool lanyards; defined drop zones; inspections/pre-use checks.',
    action: 'Supervisor – MEWP Operator',
    init: 'high', resid: 'low'
  },
  {
    id: 'ses-lifting-m-and-e',
    title: 'SES – Lifting/positioning M&E plant',
    hazard: 'Crush/pinch; dropped loads; line-of-fire.',
    who: 'Rigging team; nearby trades',
    how: 'Tight spaces; fingers at pinch points; ad-hoc lifts.',
    controls: 'Method statement & lift plan; competent slinger/signaller; rated gantries/chain blocks; hands-clear policy; EZ; comms; proof tests on fixings where needed.',
    action: 'Appointed Person – Slinger/Signaller',
    init: 'high', resid: 'low'
  },
  {
    id: 'srm-people-plant',
    title: 'SRM – People & plant interface',
    hazard: 'People struck by moving plant/vehicles.',
    who: 'All site personnel; visitors; public',
    how: 'Mixed routes; reversing; blind spots; inadequate EZ.',
    controls: 'Apply hierarchy (eliminate→PPE); segregated routes; marked exclusion/restricted zones; competent marshals; 270° surround vision cameras where specified; telehandlers with LMI; dumpers/rollers with ROPS up; quick hitches per SRM rules.',
    action: 'Site Manager – Traffic Marshal',
    init: 'high', resid: 'low'
  },
  {
    id: 'srm-lifting-ops',
    title: 'SRM – Lifting operations',
    hazard: 'Dropped/swinging loads; crush/pinch.',
    who: 'Slingers/signallers; riggers; anyone near lift zone',
    how: 'Unplanned lifts; wrong accessories; people under loads.',
    controls: 'Lift Plan + Schedule of Lifts; competent AP/SSS; exclusion zones; tag-lines; weather/ground checks; review/accept plan before start; anti-collision rules for tower cranes where applicable.',
    action: 'Appointed Person – Slinger/Signaller',
    init: 'high', resid: 'low'
  },
  {
    id: 'srm-excavators-telehandlers',
    title: 'SRM – Excavators/telehandlers/dumpers',
    hazard: 'Struck-by; overturn; attachment failure.',
    who: 'Plant ops; groundworkers; nearby trades',
    how: 'Improper hitches; poor stability; lowered ROPS.',
    controls: 'Excavators: only fully manual or fully automatic quick hitches (no semi-auto); spill kits on machines; telehandlers with longitudinal load-moment control; dumpers/rollers ROPS up; follow people/plant interface controls.',
    action: 'Plant Supervisor – Operators',
    init: 'high', resid: 'low'
  },
  {
    id: 'srm-hole-void',
    title: 'SRM – Temporary hole/void protection',
    hazard: 'Falls through openings; cover failure.',
    who: 'All trades; public near boundaries',
    how: 'Unrated/loose covers; no inspections; unclear SWL.',
    controls: 'Design with SWL & slip/trip risks; TW design if >200×200mm (when not proprietary); daily checks + weekly formal inspection; mark SWL on covers; written handover; control removal/reinstatement via RAMS.',
    action: 'TW Supervisor – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'srm-tethering',
    title: 'SRM – Tool & material tethering',
    hazard: 'Falling objects from height.',
    who: 'Workers below; public',
    how: 'Untethered tools near edges/openings.',
    controls: 'Tether tools/materials when within 2 m of edges/openings or potential >2 m fall; chin straps or tethered helmets where risk persists; CE/UKCA-marked tethers with SWL; alternative controls if tethering not possible.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'srm-storage-handling',
    title: 'SRM – Materials storage/handling',
    hazard: 'Collapse/roll; cuts; weather movement.',
    who: 'All trades; delivery crews',
    how: 'Glazing panels unrestrained; tubular stock rolling; wind uplift.',
    controls: 'Strap glazing panels on stillages/crates; tubular stock on purpose-built racking; stop blocks for round items; weigh-down/exposed-area controls; avoid manual handling where possible.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'srm-access-lighting-housekeeping',
    title: 'SRM – Access, lighting & housekeeping',
    hazard: 'Slips/trips/poor visibility.',
    who: 'All personnel; visitors',
    how: 'Obstructed routes; dark work areas; debris.',
    controls: 'Define/demarcate routes; suitable task/emergency lighting; inspect temporary electrics (3-monthly) and emergency lighting; strict housekeeping—suspend works if unacceptable.',
    action: 'Site Manager – All trades',
    init: 'medium', resid: 'low'
  },
  {
    id: 'kier-vehicles-plant',
    title: 'Kier – Vehicles, plant & equipment',
    hazard: 'People struck; equipment failure; poor competence.',
    who: 'Operators; pedestrians; public',
    how: 'Unsuitable/poorly maintained kit; untrained users.',
    controls: 'Select/operate/maintain per Kier standard; defined inspections & maintenance; verify operator competence; manage interfaces and segregation; monitor & review performance.',
    action: 'Plant Manager – Site Manager',
    init: 'high', resid: 'low'
  },
  {
    id: 'kier-lifting-ops',
    title: 'Kier – Lifting operations (SHEMS-STD-GR-045)',
    hazard: 'Dropped load; crush/pinch; line-of-fire.',
    who: 'Rigging team; nearby trades',
    how: 'Unplanned lifts; wrong accessories; poor comms.',
    controls: 'Plan by competent AP; Permit-to-Lift where required; exclude under-load access; trained slinger/signaller; inspect accessories; control proximity/oversail; supervise & brief.',
    action: 'Appointed Person – Slinger/Signaller',
    init: 'high', resid: 'low'
  },
  {
    id: 'kier-mewp',
    title: 'Kier – MEWPs (link to Lifting Ops standard)',
    hazard: 'Entrapment; overturning; falls; dropped tools.',
    who: 'Operators; spotters; people below',
    how: 'Unsuitable machine/ground; overreach; no EZ.',
    controls: 'Follow Vehicles/Plant standard and apply Lifting Ops standard to powered access; ground assessment; pre-use checks; entrapment controls; harness per manufacturer; define drop/exclusion zones; competent operators.',
    action: 'Supervisor – MEWP Operator',
    init: 'high', resid: 'low'
  },
  {
    id: 'kier-wah-ladders',
    title: 'Kier – Working at height (ladders/steps)',
    hazard: 'Falls from ladders/steps.',
    who: 'All trades using steps/ladders',
    how: 'Two-hand tasks from ladder; wrong angle; unsecured bases.',
    controls: 'Use ladders only for short, light tasks; correct inclination & securing; protect access points; use tower/MEWP for two-hand tasks; inspections; trained users per Kier ladder standard.',
    action: 'Supervisor – Users',
    init: 'high', resid: 'low'
  },
  {
    id: 'kier-temp-works',
    title: 'Kier – Temporary works & crane planning',
    hazard: 'Structural instability; collapse; over-sail/proximity.',
    who: 'TW/craning teams; all on site; public',
    how: 'Inadequate design/permits; unverified foundations; poor interfaces.',
    controls: 'Apply Kier TW standard (SHEMS-STD-GR-048) and foundations minimums; appoint TW roles; permit/plan lifts; address proximity, zoning & over-sail; use BS 7121; competent supervision.',
    action: 'TW Supervisor – Appointed Person',
    init: 'high', resid: 'low'
  },
  {
    id: 'kier-public-interface',
    title: 'Kier – Public interface & wellbeing',
    hazard: 'Public entering work areas; collisions; poor comms.',
    who: 'Public/visitors; workforce',
    how: 'Inadequate barriers/routes; night conditions; unclear info.',
    controls: 'Robust guarding & signage; accessible routes; lighting at night; community info boards; align with ISO 45001 IMS and Kier HSW policy commitments.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'crest-public-interface',
    title: 'Crest – Public interface on housing developments',
    hazard: 'Members of public entering work areas; slips/struck-by.',
    who: 'Residents/visitors; site operatives',
    how: 'Open routes through plots; school runs; shared access.',
    controls: 'Robust barriers & signed diversions; secure plot/compound boundaries; timed deliveries off-peak; housekeeping to keep footways clear; info boards/briefings to residents.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'crest-scaffolds-plot',
    title: 'Crest – Scaffolds/WAH on plots',
    hazard: 'Falls from platforms/leading edges; dropped objects.',
    who: 'Trades aloft; ground personnel; public outside hoarding',
    how: 'Incomplete guardrails; working through window/roof openings.',
    controls: 'TG20/SG4 compliant scaffold; internal/external edge protection; gated access; tool lanyards; handover and 7-day/after-event inspections; drop zones where required.',
    action: 'Scaffold Contractor – Site Manager',
    init: 'high', resid: 'low'
  },
  {
    id: 'crest-excavations-services',
    title: 'Crest – Excavations & services (plots/streets)',
    hazard: 'Collapse; falls into trench; service strikes.',
    who: 'Groundworkers; other trades; public',
    how: 'Unsupported sides; unmarked utilities; poor guarding.',
    controls: 'Plan: shore/batter/box; daily competent inspections; permit-to-dig; plans + CAT/Genny; trial holes; barriers/edge protection; safe access; spoil set-back.',
    action: 'Supervisor – Competent Person',
    init: 'high', resid: 'medium'
  },
  {
    id: 'crest-temp-electrics-fire',
    title: 'Crest – Temporary electrics & fire prevention (fit-out)',
    hazard: 'Shock/burns; fire from overloading/ignition sources.',
    who: 'All trades; residents adjacent',
    how: 'Damaged leads; ad-hoc heaters/chargers; hot works nearby.',
    controls: '110 V CTE or RCD-protected circuits; IP-rated kit; inspection/testing; clear combustibles; hot-work permit when needed; extinguishers; keep exits clear.',
    action: 'Electrical Supervisor – Site Manager',
    init: 'high', resid: 'low'
  },
  {
    id: 'crest-silica-block-cutting',
    title: 'Crest – Silica dust (block cutting/chasing)',
    hazard: 'RCS inhalation; long-term lung disease.',
    who: 'Bricklayers; joiners; M&E; others nearby',
    how: 'Dry cutting/grinding masonry; dry sweeping.',
    controls: 'Wet cutting or on-tool LEV; task-matched RPE; segregate/enclose; H-class vac (no dry sweeping); health surveillance where indicated.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'crest-wood-dust',
    title: 'Crest – Wood dust (timber/MDF on plots)',
    hazard: 'Asthma; nasal cancer (hardwoods); irritation.',
    who: 'Joiners; nearby trades',
    how: 'Cutting/sanding without extraction; poor housekeeping.',
    controls: 'On-tool extraction/LEV; H-class vac; suitable RPE; minimise on-plot cutting; health surveillance if required; clean-as-you-go.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'crest-traffic-deliveries',
    title: 'Crest – Site traffic & deliveries (estates)',
    hazard: 'People struck by vehicles/plant.',
    who: 'Workers; residents; visitors; drivers',
    how: 'Mixed pedestrian/vehicle routes; reversing in plots.',
    controls: 'Segregated routes; banksman where unavoidable; timed slots; speed limits; one-way systems; brief drivers; lighting/signage.',
    action: 'Site Manager – Traffic Marshal',
    init: 'high', resid: 'low'
  },
  {
    id: 'harrison-wah-mewp',
    title: 'Harrison – Working at height / MEWPs & towers',
    hazard: 'Falls/entrapment; dropped tools.',
    who: 'Joiners/fitters; others below',
    how: 'Two-hand tasks from ladders; unsuitable machine/ground.',
    controls: 'Use tower/MEWP for two-hand tasks; ladder only for short, light tasks; pre-use checks; entrapment controls; harness per manufacturer (booms); tool lanyards; exclusion/drop zones.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'harrison-asbestos-suspect',
    title: 'Harrison – Asbestos suspect during refurb',
    hazard: 'Fibre exposure from ACMs.',
    who: 'All trades; occupants',
    how: 'Disturbing ACMs in soffits/boards/finishes.',
    controls: 'Refurb/demolition survey before disturbance; stop if suspect; follow Asbestos Essentials for non-licensed tasks; licensed contractor where required; licensed waste route.',
    action: 'Client/PC – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'harrison-noise-havs',
    title: 'Harrison – Noise & HAVS (portable tools)',
    hazard: 'Hearing damage; hand–arm vibration.',
    who: 'Tool users; others nearby',
    how: 'Repeated cutting/drilling/grinding; long trigger times.',
    controls: 'Quieter/low-vibration kit; trigger-time limits vs EAV/ELV; maintenance/sharp blades; hearing protection programme; task rotation; warm/dry hands.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'harrison-dust-management',
    title: 'Harrison – Dust (silica/wood) control',
    hazard: 'Respiratory disease; sensitisation.',
    who: 'Trades generating dust; nearby workers/public',
    how: 'Dry cutting/chasing/sanding; sweeping.',
    controls: 'On-tool LEV or wet methods; RPE to task; H-class vac; enclosure/segregation; housekeeping; health surveillance where required.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'harrison-manual-handling',
    title: 'Harrison – Manual handling (frames/units)',
    hazard: 'MSD injuries; crush/pinch.',
    who: 'Installers; mates',
    how: 'Carrying awkward/heavy items; twisting in stairwells.',
    controls: 'Team lifts; route planning; handles/suction aids; mechanical aids where possible; break down components; rotate tasks; training.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'harrison-temporary-electrics',
    title: 'Harrison – Temporary electrics & portable tools',
    hazard: 'Electric shock; fire.',
    who: 'All trades',
    how: 'Damaged leads; incorrect voltage; wet conditions.',
    controls: '110 V CTE or RCDs; IP-rated kit; visual checks & PAT as required; cable management; keep dry; isolate before maintenance; trained users.',
    action: 'Electrical Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'msc-coshh-dust',
    title: 'Morgan Sindall – COSHH: construction dust',
    hazard: 'RCS/wood/MDF dust exposure; long-term lung disease.',
    who: 'Operatives; nearby trades; cleaners',
    how: 'Dry cutting/sanding; poor extraction; dry sweeping.',
    controls: 'On-tool LEV or wet methods; H/M-class extraction only; no disposable RPE – minimum APF 20, face-fit, daily fit checks; clean-shaven or positive-pressure set; H-class vac (no dry sweeping); health surveillance if required.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'msc-wrrr-clocs',
    title: 'Morgan Sindall – Work-related road risk (CLOCS/FORS)',
    hazard: 'People struck by vehicles; vulnerable road user collisions.',
    who: 'Drivers; cyclists; pedestrians; marshals',
    how: 'Uncontrolled routes; poor driver competence/comms.',
    controls: 'Follow CLOCS; FORS-compliant fleet; route/booking control; progressive driver training incl. VRU awareness; site access rules briefed; audits and non-conformance actions.',
    action: 'Site Manager – Logistics',
    init: 'high', resid: 'low'
  },
  {
    id: 'msc-public-interface',
    title: 'Morgan Sindall – Public interface (occupied estates/schools)',
    hazard: 'Public entering works; struck-by; slips/trips.',
    who: 'Residents; pupils; visitors; workers',
    how: 'Shared access; deliveries at peak times; inadequate barriers.',
    controls: 'Robust barriers & signed diversions; timed deliveries (avoid peaks); brief drivers; spotless housekeeping to keep routes clear; community info boards.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'msc-plant-traffic',
    title: 'Morgan Sindall – Plant & site traffic',
    hazard: 'People/plant interface incidents.',
    who: 'All personnel; visitors',
    how: 'Mixed routes; reversing; poor visibility.',
    controls: 'Segregation and EZs; banksman only where unavoidable; speed limits & one-way; lighting/signage; camera/aids where specified; enforce routes in lift/traffic plans.',
    action: 'Site Manager – Traffic Marshal',
    init: 'high', resid: 'low'
  },
  {
    id: 'bb-wah',
    title: 'Balfour – Working at height',
    hazard: 'Falls; dropped objects.',
    who: 'Trades aloft; people below',
    how: 'Incomplete edge protection; overreach; untethered tools.',
    controls: 'Prevent falls first; tools tethered; defined drop/exclusion zones; inspections (pre-use/7-day/after-event).',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'bb-utilities-avoidance',
    title: 'Balfour – Electricity & utility avoidance',
    hazard: 'Shock/arc; gas/water strikes.',
    who: 'Groundworkers; M&E; public',
    how: 'Unlocated services; unauthorised work near live.',
    controls: 'Competent persons; identify/protect; authorised permit to work; locate/mark; isolation where possible.',
    action: 'Supervisor – AP/Competent Person',
    init: 'high', resid: 'low'
  },
  {
    id: 'bb-people-plant',
    title: 'Balfour – People & plant interface',
    hazard: 'People struck by plant/vehicles.',
    who: 'All on site; visitors',
    how: 'Mixed routes; blind spots.',
    controls: 'Segregation with red/amber zones; competent identifiable operators/marshals; plant standards checked.',
    action: 'Site Manager – Traffic Marshal',
    init: 'high', resid: 'low'
  },
  {
    id: 'bb-lifting',
    title: 'Balfour – Lifting operations',
    hazard: 'Dropped/swinging loads; crush.',
    who: 'Rigging team; others nearby',
    how: 'Unplanned lift; wrong accessories; poor comms.',
    controls: 'Appointed Person; lift plan & EZ; thorough examination/inspection; tag-lines; weather/ground checks.',
    action: 'AP – Slinger/Signaller',
    init: 'high', resid: 'low'
  },
  {
    id: 'bb-excavations',
    title: 'Balfour – Excavations',
    hazard: 'Collapse; falls into; services.',
    who: 'Groundworkers; public',
    how: 'Unsupported sides; unguarded edges.',
    controls: 'Design out entry; edge protection; support or batter; daily competent inspections.',
    action: 'Supervisor – Competent Person',
    init: 'high', resid: 'medium'
  },
  {
    id: 'bb-driving',
    title: 'Balfour – Driving for work',
    hazard: 'Collisions/fatigue.',
    who: 'Drivers; public',
    how: 'Distraction; tired driving.',
    controls: 'No hand-held devices; fatigue management; permit/licence checks; route planning.',
    action: 'Logistics – Drivers',
    init: 'medium', resid: 'low'
  },
  {
    id: 'isg-electrical-permit',
    title: 'ISG – Electrical work/energisation (PTW)',
    hazard: 'Shock/arc; burns; fire.',
    who: 'Electricians; commissioning; others nearby',
    how: 'Working on/near live; energising incomplete systems.',
    controls: 'Permit to Work aligned to ESSoW; prove dead; inspect/test before energisation; competent authorised persons; isolation & lock-off; suitable PPE.',
    action: 'Electrical Supervisor – AP',
    init: 'high', resid: 'low'
  },
  {
    id: 'isg-portables-pat',
    title: 'ISG – Portable tools/leads (inspection & test)',
    hazard: 'Electric shock; burns; secondary fire.',
    who: 'All tool users',
    how: 'Damaged leads; out-of-date tests.',
    controls: 'Visual checks before use; inspected/tested prior to first use & at defined intervals (typ. 3-monthly on construction); defective kit quarantined.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'isg-5point-ppe',
    title: 'ISG – Site rules & 5-point PPE',
    hazard: 'Head/eye/hand injuries; poor visibility.',
    who: 'All site personnel; visitors',
    how: 'Non-compliance with basic PPE/site rules.',
    controls: 'Enforce 5-point PPE (hard hat, eye protection, hi-vis, gloves, safety boots) and local rules; brief at induction; monitor and correct.',
    action: 'Site Manager – All trades',
    init: 'medium', resid: 'low'
  },
  {
    id: 'isg-lifting-mewp-generic',
    title: 'ISG – WAH/MEWPs & lifting interface',
    hazard: 'Falls/entrapment; dropped loads.',
    who: 'MEWP users; rigging team; others below',
    how: 'Wrong machine/ground; unplanned lifts near access.',
    controls: 'Select suitable MEWP; pre-use checks; entrapment controls; plan lifts with EZ; single point of command; tool tethering aloft.',
    action: 'Supervisor – Operators',
    init: 'high', resid: 'low'
  },
  {
    id: 'lor-people-plant',
    title: 'Laing O’Rourke – People & plant interface (FSR)',
    hazard: 'People struck by plant/vehicles.',
    who: 'All site personnel; public',
    how: 'Mixed routes; blind spots; poor zoning.',
    controls: 'Define/mark EZ & restricted zones; segregation; competent marshals; compliant plant; monitor effectiveness of critical controls.',
    action: 'Site Manager – Plant Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'lor-wah',
    title: 'Laing O’Rourke – Working at height (FSR)',
    hazard: 'Falls from height; dropped objects.',
    who: 'Trades aloft; others below',
    how: 'Missing guardrails; two-hand tasks from ladders.',
    controls: 'Avoid/engineer out; towers/MEWPs/scaffolds with full guarding; tether tools; inspections; monitor FSR controls.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'lor-cranes-lifting',
    title: 'Laing O’Rourke – Cranes & lifting (FSR)',
    hazard: 'Crush/swing; load drop.',
    who: 'Rigging teams; nearby trades',
    how: 'Unplanned lift; proximity conflicts.',
    controls: 'Lift plan & acceptance; competent AP/SSS; EZ & comms; anti-collision where applicable; inspections of accessories.',
    action: 'AP – Slinger/Signaller',
    init: 'high', resid: 'low'
  },
  {
    id: 'lor-temp-works-voids',
    title: 'Laing O’Rourke – Temporary works & void protection',
    hazard: 'Collapse; falls through openings.',
    who: 'All trades; public at boundary',
    how: 'Unrated/loose covers; un-designed temporary works.',
    controls: 'TW design/brief; rated covers with SWL marked; inspections/handovers; control removal/reinstatement.',
    action: 'TW Supervisor – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'lor-confined-spaces',
    title: 'Laing O’Rourke – Confined spaces (FSR)',
    hazard: 'Toxic/flammable atmospheres; O₂ deficiency.',
    who: 'Entrants; standby',
    how: 'Entry without testing/permits; poor rescue prep.',
    controls: 'Permit; test/monitor atmospheres; isolation/ventilation; trained entrants & attendant; rescue plan & kit.',
    action: 'Permit Issuer – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'lor-electricity',
    title: 'Laing O’Rourke – Electrical isolations (FSR)',
    hazard: 'Shock/arc flash.',
    who: 'Electricians; commissioning; nearby trades',
    how: 'Work on not-proved-dead systems; bypassed isolations.',
    controls: 'LOTO; prove dead; insulated barriers/tools; authorised persons; live work by exception.',
    action: 'Electrical Supervisor – AP',
    init: 'high', resid: 'low'
  },
  {
    id: 'wd-all-safe-wah',
    title: 'Willmott Dixon – All Safe: working at height',
    hazard: 'Falls; dropped objects.',
    who: 'Trades aloft; others below',
    how: 'Ladders for two-hand tasks; incomplete guarding.',
    controls: 'Hierarchy of control; tower/MEWP/scaffold with full guardrails; gated access; tool lanyards; handover and periodic inspections.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'wd-public-interface',
    title: 'Willmott Dixon – Public interface on live premises',
    hazard: 'Public entering work; struck-by; trips.',
    who: 'Occupants; visitors; workforce',
    how: 'Shared routes; unclear segregation; poor info.',
    controls: 'Barriers & signage; accessible diversions; timed noisy/dusty works; housekeeping; info boards & briefings.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'wd-fire-policy-reg38',
    title: 'Willmott Dixon – Fire safety & Regulation 38',
    hazard: 'Ignition/spread; non-compliant handover.',
    who: 'Workers; future occupants',
    how: 'Hot works; wrong products; poor records.',
    controls: 'Follow Fire Safety Requirements Policy; mandatory Fire Compliance Book; record products/competence; hot-work permits; maintain clear escapes.',
    action: 'Site Manager – Fire Marshal',
    init: 'high', resid: 'low'
  },
  {
    id: 'wd-excavations-services',
    title: 'Willmott Dixon – Excavations & services',
    hazard: 'Collapse; service strikes; falls.',
    who: 'Groundworkers; public',
    how: 'Unsupported sides; unmarked utilities; inadequate guarding.',
    controls: 'Shore/batter/box; CAT & Genny; permits; edge protection; safe access; daily inspections.',
    action: 'Supervisor – Competent Person',
    init: 'high', resid: 'medium'
  },
 {
    id: 'excavation-collapse',
    title: 'Excavation and trench collapse',
    hazard: 'Collapse of excavation sides, falling into excavations',
    who: 'Groundworkers; Other site operatives; Visitors',
    how: 'Excavation sides giving way, operatives working at bottom of trench or near edge exposed to collapse/fall hazards',
    controls: 'All excavations to be designed and supported by a competent person. Use trench boxes, shoring or benching where required. Daily inspections by a competent person recorded in excavation register. Edge protection to be installed. No plant/vehicles within exclusion zones without banksman authorisation.',
    action: 'Site Manager / Competent Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'services-strike',
    title: 'Contact with underground or overhead services',
    hazard: 'Striking buried services (gas, electric, water) or overhead power lines',
    who: 'Groundworkers; Plant operators; Public',
    how: 'Excavator bucket, hand tools or plant coming into contact with services leading to electrocution, fire, flooding or explosion',
    controls: 'Carry out service scans and review utility drawings before digging. Mark service routes on ground. Use CAT & Genny prior to breaking ground. Hand-dig trial holes to confirm locations. Maintain safe clearance distances from overhead power lines. Exclusion zones and permit-to-dig system in place.',
    action: 'Site Manager / Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'plant-movement',
    title: 'Plant and vehicle movements',
    hazard: 'Collision between moving plant and people or structures',
    who: 'Groundworkers; Other contractors; Visitors',
    how: 'Dumpers, excavators or delivery vehicles striking pedestrians or site assets',
    controls: 'Segregated vehicle and pedestrian routes with clear signage. Trained and authorised operators only. Reversing alarms and flashing beacons on all plant. Use of trained banksman during reversing/working in tight areas. High-visibility PPE mandatory in all plant zones.',
    action: 'Plant Operators / Banksman / Site Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'ground-contamination',
    title: 'Exposure to contaminated ground',
    hazard: 'Health risks from contaminated soils, chemicals, asbestos containing materials',
    who: 'Groundworkers; Environmental contractors',
    how: 'Excavation disturbing contaminated material leading to inhalation, skin contact or ingestion',
    controls: 'Site investigation reports to be reviewed before works. Where contamination is present, COSHH assessments to be followed. Suitable PPE (gloves, masks, coveralls) to be worn. Dust suppression measures (damping down). Segregation of contaminated spoil and safe disposal via licensed waste carriers.',
    action: 'Site Manager / Environmental Specialist',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'manual-handling-groundworks',
    title: 'Manual handling of heavy materials',
    hazard: 'Musculoskeletal injuries from lifting kerbs, manhole covers, shuttering panels',
    who: 'Groundworkers',
    how: 'Lifting/carrying awkward heavy materials causing strains or back injury',
    controls: 'Mechanical lifting aids (kerb lifters, vacuum lifters, lifting chains) to be used. Team lifting for heavy items. Manual handling training provided. Breaks to be scheduled for repetitive tasks. Materials stored as close to point of use as possible.',
    action: 'Supervisor / Operatives',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'slips-trips-groundworks',
    title: 'Slips, trips and falls on uneven ground',
    hazard: 'Injury from falls on debris, mud or uneven surfaces',
    who: 'Groundworkers; All contractors',
    how: 'Uneven surfaces, wet ground, trailing cables, discarded materials',
    controls: 'Maintain good housekeeping standards. Clear walkways of debris and spoil. Use anti-slip matting or stone fill on particularly muddy routes. Adequate lighting for work areas. Mandatory safety boots with midsole protection.',
    action: 'Supervisor / All Operatives',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'excavation-collapse',
    title: 'Excavation and trench collapse',
    hazard: 'Collapse of excavation sides, falling into excavations',
    who: 'Groundworkers; Other site operatives; Visitors',
    how: 'Excavation sides giving way, operatives working at bottom of trench or near edge exposed to collapse/fall hazards',
    controls: 'Design risk assessments under CDM 2015 to eliminate deep excavations where practicable. Temporary works designed by competent engineer. Use trench boxes, hydraulic shoring or battering/stepping of sides. Daily inspections by a competent person with findings recorded. Exclusion zones with barriers/fencing to prevent unauthorised access. Plant routes designed away from edge loading. Permit-to-dig system in place with Principal Contractor oversight.',
    action: 'Principal Contractor / Site Manager / Temporary Works Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'services-strike',
    title: 'Contact with underground or overhead services',
    hazard: 'Striking buried services (gas, electric, water) or overhead power lines',
    who: 'Groundworkers; Plant operators; Public',
    how: 'Excavator bucket, hand tools or plant coming into contact with services leading to electrocution, fire, flooding or explosion',
    controls: 'Pre-construction information gathered under CDM 2015 to identify service locations. Utility plans reviewed and confirmed on site. CAT & Genny scans by trained operators with results recorded. Permit-to-dig system authorised by Site Manager. Trial holes dug to prove service positions. Safe clearance zones marked and barriers erected. Exclusion zones for overhead lines established in line with HSE GS6. Toolbox talks and clear briefing of all operatives before breaking ground.',
    action: 'Principal Contractor / Supervisor / Trained Operatives',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'plant-movement',
    title: 'Plant and vehicle movements',
    hazard: 'Collision between moving plant and people or structures',
    who: 'Groundworkers; Other contractors; Visitors',
    how: 'Dumpers, excavators or delivery vehicles striking pedestrians or site assets',
    controls: 'Construction Phase Plan (CDM 2015) to include traffic management plan designed by competent person. Segregated vehicle and pedestrian routes with barriers and signage. Appointed traffic marshal to coordinate deliveries. Only trained, authorised CPCS operators permitted. Plant fitted with mirrors, cameras, audible reversing alarms and flashing beacons. All workers briefed on site traffic rules at induction. High-visibility clothing mandatory. Stop–Go systems for shared access points.',
    action: 'Principal Contractor / Traffic Marshal / Plant Operators',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'ground-contamination',
    title: 'Exposure to contaminated ground',
    hazard: 'Health risks from contaminated soils, chemicals, asbestos containing materials',
    who: 'Groundworkers; Environmental contractors',
    how: 'Excavation disturbing contaminated material leading to inhalation, skin contact or ingestion',
    controls: 'Site investigation reports included within Pre-Construction Information pack under CDM 2015. Contamination management plan developed. COSHH assessments carried out and communicated. Segregation of hazardous spoil into designated skips. Damping down or mist suppression to control dust. Only trained operatives with appropriate PPE (coveralls, gloves, RPE) permitted to handle. Emergency wash stations available. Licensed waste carriers used for disposal with duty of care transfer notes.',
    action: 'Principal Contractor / Environmental Specialist / Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'manual-handling-groundworks',
    title: 'Manual handling of heavy materials',
    hazard: 'Musculoskeletal injuries from lifting kerbs, manhole covers, shuttering panels',
    who: 'Groundworkers',
    how: 'Lifting/carrying awkward heavy materials causing strains or back injury',
    controls: 'CDM 2015 requires designers to avoid manual handling by specifying pre-cast lifting points and mechanical handling solutions. Use mechanical lifting aids (kerb lifters, vacuum lifters, mechanical grabs). Team lifting as a last resort with operatives trained in safe technique. Work planned to minimise double handling. Materials delivered as close to point of use as possible. Regular health surveillance for musculoskeletal issues.',
    action: 'Principal Designer (design stage) / Site Manager / Supervisor',
    init: 'medium',
    resid: 'low'
  },
    {
    id: 'excavation-collapse',
    title: 'Excavation and trench collapse',
    hazard: 'Collapse of excavation sides, falling into excavations',
    who: 'Groundworkers; Other site operatives; Visitors',
    how: 'Excavation sides giving way, operatives working at bottom of trench or near edge exposed to collapse/fall hazards',
    controls: 'Temporary works designed by a competent engineer under CDM 2015 duties. Use trench boxes, hydraulic shoring, or battered sides. Daily inspections by a competent person recorded in excavation register. Exclusion barriers and signage around open excavations. No plant/vehicles within 2m of edge without engineered protection. Permit-to-dig system authorised by Site Manager. Emergency rescue plan in place.',
    action: 'Principal Contractor / Temporary Works Coordinator / Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'services-strike',
    title: 'Contact with underground or overhead services',
    hazard: 'Striking buried services (gas, electric, water) or overhead power lines',
    who: 'Groundworkers; Plant operators; Public',
    how: 'Excavator bucket, hand tools or plant coming into contact with services leading to electrocution, fire, flooding or explosion',
    controls: 'Pre-construction information to include utility survey. CAT & Genny scans carried out by trained operators. Service drawings marked up and briefed. Trial holes hand-dug to confirm locations. Permit-to-dig system enforced. Overhead power lines avoided by exclusion zones in line with HSE GS6. Clear markings and protective covers for identified services. Toolbox talks before excavation.',
    action: 'Principal Contractor / Supervisor / Trained Operatives',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'plant-movement',
    title: 'Plant and vehicle movements',
    hazard: 'Collision between moving plant and people or structures',
    who: 'Groundworkers; Other contractors; Visitors',
    how: 'Dumpers, excavators or delivery vehicles striking pedestrians or site assets',
    controls: 'Traffic management plan included in Construction Phase Plan. Segregated vehicle and pedestrian routes with barriers. Trained traffic marshals in high-risk zones. Plant fitted with mirrors, cameras, reversing alarms, and flashing beacons. Banksman used for reversing and tight manoeuvres. Induction and toolbox talks covering traffic routes. Hi-vis PPE mandatory. One-way systems implemented where possible.',
    action: 'Principal Contractor / Traffic Marshal / Plant Operators',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'ground-contamination',
    title: 'Exposure to contaminated ground',
    hazard: 'Health risks from contaminated soils, chemicals, asbestos containing materials',
    who: 'Groundworkers; Environmental contractors',
    how: 'Excavation disturbing contaminated material leading to inhalation, skin contact or ingestion',
    controls: 'Site investigation included in Pre-Construction Information pack. Contamination management plan agreed before works. COSHH assessments completed. Segregation of contaminated spoil with covered skips. Dust suppression via damping down. PPE (coveralls, gloves, FFP3 RPE) issued and enforced. Licensed waste carriers used. Decontamination/wash stations available. Workers briefed on emergency procedures.',
    action: 'Principal Contractor / Environmental Specialist / Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'manual-handling',
    title: 'Manual handling of heavy materials',
    hazard: 'Musculoskeletal injuries from lifting kerbs, manhole covers, shuttering panels',
    who: 'Groundworkers',
    how: 'Lifting/carrying awkward heavy materials causing strains or back injury',
    controls: 'Designers to specify mechanical lifting solutions where possible. Kerb lifters, vacuum lifters, and mechanical grabs used. Team lifting only as last resort with trained operatives. Manual handling training included in induction. Materials delivered close to workface. Rotation of tasks to reduce repetitive strain. Regular health surveillance in place.',
    action: 'Principal Designer / Site Manager / Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'slips-trips-falls',
    title: 'Slips, trips and falls on uneven ground',
    hazard: 'Injury from falls on debris, mud or uneven surfaces',
    who: 'Groundworkers; All contractors; Visitors',
    how: 'Uneven surfaces, wet ground, trailing cables, discarded materials',
    controls: 'Good housekeeping included in Construction Phase Plan. Spoil and debris cleared daily. Temporary stone haul roads or walkways installed. Adequate task lighting. Site inductions highlight hazards. Safety boots with midsole protection mandatory. Designated storage areas for tools and cables. Emergency routes kept clear.',
    action: 'Supervisor / All Operatives',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'noise-vibration',
    title: 'Noise and vibration exposure',
    hazard: 'Hearing loss or HAVS from plant and hand tools',
    who: 'Groundworkers; Plant operators',
    how: 'Use of breakers, compactors, piling rigs and plant causing high noise/vibration',
    controls: 'Noise/vibration assessments undertaken. Quieter equipment selected where practicable. Mandatory hearing protection zones established. Rotation of tasks to reduce exposure. HAVS monitoring in place. Health surveillance for operatives using vibrating tools. Toolbox talks on HAVS awareness. Tools serviced regularly.',
    action: 'Supervisor / Site Manager',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'dust-control',
    title: 'Exposure to construction dust',
    hazard: 'Respiratory issues from silica dust, concrete cutting, soil disturbance',
    who: 'Groundworkers; All operatives',
    how: 'Dry cutting, drilling, or excavation generating airborne dust',
    controls: 'Dust suppression by water sprays/mist. On-tool extraction for cutting and drilling. FFP3 masks provided and face fit tested. Work planned to minimise dry cutting. Dust exposure levels monitored. Work areas segregated from public/other trades. Regular cleaning of welfare facilities to prevent cross-contamination.',
    action: 'Supervisor / Operatives',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'confined-space',
    title: 'Work in confined spaces',
    hazard: 'Oxygen deficiency, toxic gases, fire, or flooding',
    who: 'Groundworkers; Specialist contractors',
    how: 'Manhole entry, culverts or service ducts posing confined space risks',
    controls: 'Confined space assessment carried out. Permit-to-work system enforced. Only trained and authorised operatives permitted. Gas monitoring prior to and during entry. Ventilation provided. Rescue plan and emergency equipment in place. Communications maintained with top man. Continuous supervision required.',
    action: 'Site Manager / Confined Space Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'lifting-operations',
    title: 'Lifting operations with cranes or excavators',
    hazard: 'Dropped loads or equipment failure',
    who: 'Groundworkers; Lifting team; Other operatives nearby',
    how: 'Failure of lifting accessories, poor signalling, or loads striking operatives',
    controls: 'Lifting plan prepared by Appointed Person. All lifts carried out by CPCS-certified operators. Banksman and slinger-signallers trained and authorised. Lifting accessories inspected and certified. Exclusion zones enforced. Loads secured and kept clear of personnel. Weather monitored for wind risk.',
    action: 'Appointed Person / Crane Supervisor / Plant Operator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'working-near-water',
    title: 'Groundworks near water bodies',
    hazard: 'Drowning, slips, water ingress',
    who: 'Groundworkers; Visitors',
    how: 'Works adjacent to ponds, rivers, drainage channels',
    controls: 'Safe access routes established. Edge protection and barriers installed. Buoyancy aids available. Rescue plan in place. Pumps installed to manage water ingress. Permit-to-work where risk of flooding. Toolbox talks on water risks. Lifejackets worn if working within 2m of edge.',
    action: 'Site Manager / Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'weather-conditions',
    title: 'Adverse weather conditions',
    hazard: 'Heat stress, cold stress, high winds',
    who: 'Groundworkers; All operatives',
    how: 'Exposure to heat, cold or strong winds affecting safe working',
    controls: 'Weather monitored daily. Works postponed in high winds when using cranes or MEWPs. Cold weather gear and heated welfare available. Sun protection and hydration provided in hot weather. Rest breaks scheduled. Emergency plans for lightning or storms.',
    action: 'Site Manager / Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'public-interface',
    title: 'Working adjacent to public areas',
    hazard: 'Injury to public from site activities',
    who: 'General public; Visitors',
    how: 'Plant movement, falling objects, dust or noise escaping site boundary',
    controls: 'Site hoarding and fencing installed. Controlled access gates with security. Deliveries scheduled outside peak public hours. Signage erected. Noise and dust suppressed. Banksman at gate during deliveries. Public kept informed through Principal Contractor communication.',
    action: 'Principal Contractor / Site Manager',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'temporary-works-failure',
    title: 'Failure of temporary works',
    hazard: 'Collapse of shoring, scaffolds, formwork',
    who: 'Groundworkers; Other contractors',
    how: 'Improperly designed or installed temporary works giving way',
    controls: 'Temporary works designed and checked by qualified engineer. Inspections before use. Works carried out by trained operatives. Competent Temporary Works Coordinator appointed. Records maintained. Regular monitoring during construction. Load limits clearly marked.',
    action: 'Temporary Works Coordinator / Site Manager',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'hand-arm-vibration',
    title: 'Exposure to hand-arm vibration',
    hazard: 'HAVS or white finger from vibrating tools',
    who: 'Groundworkers',
    how: 'Prolonged use of breakers, compactors, drills',
    controls: 'HAVS assessment undertaken. Trigger times monitored and controlled. Rotation of tasks. Low-vibration tools used where possible. Gloves issued for comfort (not protection). Health surveillance undertaken. Operatives trained to recognise early symptoms.',
    action: 'Supervisor / Site Manager',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'lighting-failure',
    title: 'Poor site lighting',
    hazard: 'Trips, falls or plant collisions due to low visibility',
    who: 'Groundworkers; All contractors',
    how: 'Insufficient lighting in excavation, access routes, or work areas',
    controls: 'Task lighting and floodlights installed. Emergency lighting where required. Lighting checked daily. Temporary cables routed safely. Lighting plan included in site logistics. Toolbox talks to report lighting defects promptly.',
    action: 'Supervisor / Electrician',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'hot-works',
    title: 'Hot works on site',
    hazard: 'Fire, burns, inhalation of fumes',
    who: 'Groundworkers; Welders; Nearby operatives',
    how: 'Cutting, grinding, or welding near combustible materials',
    controls: 'Hot works permit system enforced. Fire extinguishers available at point of work. Fire watch during and after works. Combustibles cleared or shielded. RPE provided where fumes generated. Trained operatives only. Fire alarm and evacuation plan briefed.',
    action: 'Site Manager / Hot Works Operatives',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'site-security',
    title: 'Unauthorised access',
    hazard: 'Injury to trespassers, theft of plant/materials',
    who: 'Public; Children; Workers',
    how: 'Unsupervised entry into construction site',
    controls: 'Perimeter hoarding and locked gates installed. Security patrols and CCTV in place. Clear signage warning of dangers. Plant secured and immobilised. Materials stored safely. Out-of-hours emergency contacts displayed. Access control system for workers.',
    action: 'Principal Contractor / Site Security',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'emergency-response',
    title: 'Emergency preparedness',
    hazard: 'Delayed response to accidents, fire or service strikes',
    who: 'All workers; Public',
    how: 'Inadequate planning or equipment for emergencies',
    controls: 'Emergency procedures included in Construction Phase Plan. Site fire points clearly marked. First aiders appointed and trained. Spill kits and fire extinguishers at key locations. Emergency contacts posted. Drills carried out and recorded. Liaison with emergency services for high-risk activities.',
    action: 'Principal Contractor / Site Manager',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'slips-trips-groundworks',
    title: 'Slips, trips and falls on uneven ground',
    hazard: 'Injury from falls on debris, mud or uneven surfaces',
    who: 'Groundworkers; All contractors; Visitors',
    how: 'Uneven surfaces, wet ground, trailing cables, discarded materials',
    controls: 'Good housekeeping included in Construction Phase Plan. Daily site inspections by Supervisor. Spoil and materials cleared to designated areas. Stone haul roads or temporary walkways installed in high traffic zones. Adequate task lighting at all times. Operatives issued with safety boots with midsole protection. Site induction highlights slip/trip risks. Emergency routes to remain clear at all times.',
    action: 'Supervisor / All Operatives',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'noise-vibration-groundworks',
    title: 'Noise and vibration exposure',
    hazard: 'Hearing loss or HAVS from plant and hand tools',
    who: 'Groundworkers; Plant operators',
    how: 'Use of breakers, compactors, piling rigs and plant causing high noise/vibration',
    controls: 'Noise/vibration risk assessment completed and results shared with workforce. Planning of work to reduce exposure (quieter equipment, off-site fabrication). Use of low-vibration tools and regular maintenance. Hearing protection zones established. Rotation of operatives to limit HAVS exposure. Health surveillance under Control of Vibration at Work Regs. Training provided on safe tool use and recognition of HAVS symptoms. Compliance monitored by Site Manager under CDM duties.',
    action: 'Supervisor / Site Manager',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'noise-vibration-groundworks',
    title: 'Noise and vibration exposure',
    hazard: 'Hearing loss or HAVS from plant and hand tools',
    who: 'Groundworkers; Plant operators',
    how: 'Use of breakers, compactors, piling rigs and plant causing high noise/vibration',
    controls: 'Noise/vibration assessments carried out. Hearing protection zones established. Mandatory ear defenders where exposure exceeds limits. Rotation of tasks to reduce exposure. HAVS monitoring and health surveillance in line with company policy. Tools maintained to reduce vibration.',
    action: 'Supervisor / Site Manager',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'wd-plant-traffic',
    title: 'Willmott Dixon – Vehicles/plant management',
    hazard: 'People struck by moving vehicles/plant.',
    who: 'All personnel; visitors',
    how: 'Mixed routes; reversing; poor competence.',
    controls: 'Segregation; route design; banksman only where unavoidable; competence & maintenance; monitoring.',
    action: 'Plant Manager – Site Manager',
    init: 'high', resid: 'low'
  }

];

/* UK construction hazard snippet library (vanilla JS) */
window.hazardSnippets = [
    {
    id: 'work-at-height',
    title: 'Work at height (Installing Bracketry)',
    hazard: 'Falling Objects, head collision with fixed objects, e.g. steelwork, pipework, building structure etc.',
    who: 'MVL Employees; Other Trade contractors',
    how: 'Unfinished/Unfixed ductwork or bracketry whilst being installed potentially falling from height, whilst working at height clashing with objects',
    controls: 'Ensure operatives are provided with and wear always on site suitable hard hat protection and are aware of statutory requirements for use. Also use of mechanical lifting equipment and a wide working platform. Tools to be tethered whilst being used when working at height.',
    action: 'Supervisor – Operatives',
    init: 'medium',
    resid: 'low'
  },
   {
    id: 'RA01_Falls_From_Height',
    title: 'RA01 Falls from height (ladders)',
    hazard: 'Fall from height using ladders',
    who: 'Employees, 3rd parties',
    how: 'Working from/ascending ladders; overreaching; defective/incorrect ladder',
    controls: 'Use Grade 1 ladders in good condition; ladders are for access only; maintain 3 points of contact; set up to avoid overreach; foot when erecting and tie off; keep rungs clean; inspect/clean regularly.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
   {
    id: 'cuts-metal',
    title: 'Cuts from bare edges of metal',
    hazard: 'Cuts from bare edges of metal.',
    who: 'MVL Employees',
    how: 'Carrying or install of sheet metal/spiral wound ductwork',
    controls: 'Cut 5 resistance gloves are mandatory and to be worn always; these will also protect from cuts when handling ductwork. Long sleeves/gauntlets to be worn whilst carrying or installing ductwork with \'bare edges\'.',
    action: 'Supervisor / Luke Watson',
    init: 'low',
    resid: 'low'
  },
   {
    id: 'hearing-noise',
    title: 'Noise affecting hearing',
    hazard: 'Noises affecting hearing',
    who: 'MVL Employees',
    how: 'Use of power tools and whilst installing ductwork',
    controls: 'Operatives are provided with ear defenders for use whilst using power tools producing noises over 80db and are mandatory when the ELV is above 87db whilst installing.',
    action: 'Supervisor / Luke Watson',
    init: 'medium',
    resid: 'low'
  }];
    // Snippet library
    const METHOD_SNIPPETS = {
  equipment: [
    { id: "ms-kerb-laying",
      title: "Laying Precast Kerbs",
      fields: {
        title: "Laying Precast Concrete Kerbs",
        equipment: "Sample equipment A\nSample equipment B",
        ppe: "Hard hat\nHi-vis vest\nSafety boots",
        method: `- Review kerb line drawings, radii, levels and tie-ins; confirm kerb type (HB, BN, quadrants) and bed/haunch concrete class.
- Preparation: Form and compact sub-base to required level/width; install temporary line pins and taut string line (or total station) for line/level.
- Concrete bed: Place fresh bed to specified depth/width; strike level following string line; keep working face clean.
- Handling: Use mechanical kerb lifter/vacuum lifter; present each unit to line; lower onto bed without twisting; tap down with rubber mallet to level.
- Alignment: Maintain face to string line; check joint tightness and uniformity; cut units with saw/wet-cut where required; use quadrant/splay units for radii where available.
- Levels & falls: Check every unit with level; confirm crossfall and upstand relative to finished surface.
- Gaps & joints: Maintain specified joint gap; fill with mortar where required; clean faces immediately.
- Haunching: Once a run is aligned, place backing/haunch concrete to specified height/width; fully support rear and partially cover sides; do not disturb alignment.
- Interfaces: Install gully kerbs/kerb inlets to correct level; check transitions at crossings, bellmouths and tactile paving zones.
- Protection & cure: Protect from trafficking; allow concrete to cure per spec; prevent early loading.
- QA records: Record line/level checks; radii checks; materials tickets for concrete; photo record at tie-ins.`,
  
        training: "Site induction; Task briefing; Specific plant training",
        risks: "Slips/trips; Manual handling; Dust exposure",
        associated: "RA-TEST-001; RA-TEST-002"
      }
    },

    {
  id: "MS5_Use_of_Hand_Tools",
  title: "MS5 Use of Hand Tools",
  fields: {
    title: "MS5 Use of Hand Tools",
    equipment: `Hammers
Saws
Knife blades
Pliers
Screwdrivers
Spanners`,
    ppe: `Eye protection for projectile risks
Hard hat as environment dictates
RPE where dust is generated
Hearing protection for noisy tasks
Gloves unless task is touch-sensitive (use barrier cream as alternative)`,
    method: `- Consider the operative’s capability/health for the task.
- Assess the environment (confined spaces, flammable atmospheres).
- Select the correct tool (ergonomics, duration of use).
- Inspect tool condition; ensure it's fit for purpose.
- Control secondary hazards (dust, noise); provide suitable PPE/RPE.
- Use spark-free tools in flammable environments.
- For touch-sensitive tasks, consider alternatives to gloves (e.g., barrier cream).
- After use, clean the area; store tools; include in maintenance regime.`,
    training: `No formal certification usually required; ensure adequate experience and task-specific demonstration where needed.`,
    risks: `Eye injuries from projectiles
Impact injuries (e.g., hammer strikes)
Respiratory issues from dust
Cuts and abrasions from sharp tools
Noise-induced hearing loss`,
    associated: `Related method statements: MS1 Manual Handling; MS2 PPE; MS22 Noise`
  }
},
{
  id: "MS4_Excavators",
  title: "MS4 Excavators",
  fields: {
    title: "MS4 Excavators",
    equipment: `360 Excavator
Mini Digger
Lifting accessories (as required, SWL-checked)`,
    ppe: `High-visibility clothing
Standard site PPE as task-specific (helmet, boots, gloves, eye/ear)`,
    method: `- Operators to hold valid certification (e.g., CPCS/NPORS); conduct pre-use checks.
- Familiarise with controls; identify hazards on site (ditches, stumps, debris).
- Locate/mark overhead and underground services; implement GS6/goalposts if needed.
- Position plant safely away from trench edges; secure attachments/quick-hitch.
- Use ROPS and seat belts; never exceed load capacities.
- Keep workers out of swing radius and below suspended loads; use spotters/signallers.
- Follow safe dumping/backfilling techniques to maintain stability.
- Switch off and leave boom in a safe position when not in use.`,
    training: `Certified operators; competent persons for lifting gear inspection; trained banksman and CAT/Genny users.`,
    risks: `Struck by bucket during slewing
Struck by falling objects from the bucket
Crushed by moving plant
Electrocution from contact with power lines
Striking nearby structures
Overturning due to over-reach/poor ground`,
    associated: `LOLER 1998 (lifting)
PUWER 1998 (work equipment)`
  }
},
{
  id: "MS3_Disc_Cutters",
  title: "MS3 Disc Cutters",
  fields: {
    title: "MS3 Disc Cutters",
    equipment: `Disc cutters
Dust suppression (water supply)
Spill kit and drip tray for refuelling`,
    ppe: `Face mask / RPE (FFP3 disposable or P3 reusable / JSP Infinity hood)
Eye protection (shatterproof)
Hearing protection
Gloves`,
    method: `- Inspect disc cutter prior to use; record weekly PUWER checks.
- Ensure only competent, trained operatives use the equipment.
- Select the correct blade for the material/task.
- Use dust suppression and appropriate RPE; monitor against WELs.
- Keep the work area clear of combustible materials; have extinguishers nearby.
- Keep both hands on the saw and your body clear of the wheel.
- Barrier the area to prevent unauthorised access.
- Refuel cold only; use drip tray; check for leaks and secure caps.`,
    training: ``,
    risks: ``,
    associated: `Operators to hold appropriate licences/certification; 
    face-fit testing for RPE; records held on site.
    
    Silicosis/COPD/Lung cancer from respirable dust
Hearing damage
Eye injuries from flying debris
Cuts/abrasions from sharp edges


PUWER 1998 (inspection and checks)
HSE INDG461 (Safe use of cut-off saws)`
  }
},
{
  id: "MS2_Personal_Protective_Equipment",
  title: "MS2 Personal Protective Equipment",
  fields: {
    title: "MS2 Personal Protective Equipment",
    equipment: `Hard hats
Eye protection (goggles/shatterproof glasses)
Safety boots
Gloves (incl. for hazardous substances)
High-visibility clothing
RPE (e.g., FFP3)`,
    ppe: `Hard hat
High-visibility clothing
Safety footwear
Eye protection where risk of projectiles
Gloves as task-specific
RPE (FFP3/BA) where dust/oxygen deficiency`,
    method: `- Wear a hard hat in live construction areas with overhead/object fall risks.
- Wear high-visibility clothing where vehicles/plant operate.
- Wear safety footwear on live construction sites.
- Provide/use gloves where substances or tasks require.
- Use RPE where dust is generated; BA where oxygen deficiency may occur.
- Ensure PPE items are compatible and do not hinder the task.
- Dispose of single-use PPE correctly; use licensed contractor if necessary.
- Replace damaged/defective PPE; maintain and store PPE properly.`,
    training: `Training in the correct use, care and maintenance of PPE; employees to cooperate (HSAWA s7).`,
    risks: `Struck by falling objects
Crushed by moving plant/machinery
Eye injury from projectiles
Contact dermatitis
Foot injuries/broken bones from dropped objects`,
    associated: `Personal Protective Equipment at Work Regulations 2002`
  }
},
{
  id: "MS1_Manual_Handling",
  title: "MS1 Manual Handling",
  fields: {
    title: "MS1 Manual Handling",
    equipment: `Mechanical lifting aids (e.g., kerb lifters)
Accessories to reduce manual lifts where possible`,
    ppe: `Safety footwear (steel toe-capped)
Task-specific PPE as required (gloves/eye/hearing/RPE)`,
    method: `- Plan travel routes before starting the task.
- Keep travel routes clear and free of obstructions.
- Assess the load and test before lifting.
- Wear task-appropriate PPE for the material being handled.
- Use mechanical aids wherever possible to avoid manual lifting.
- For loads above 20 kg, use a minimum two-person lift.
- Ensure the load does not obstruct the carrier’s view.
- Move at a comfortable pace; do not run with the load.`,
    training: `Leave Blank`,
    risks: `RA1`,
    associated: `Manual handling training; operatives instructed in correct lifting/moving techniques.
    Strains from jerking/heavy lifts
Sprains from slips/trips or poor visibility
Cuts and abrasions from sharp objects
Repetitive strain injuries
Lower limb injuries from dropped loads
Musculoskeletal injury from awkward/cumbersome loads)
Manual Handling Operations Regulations (MHOR) 2002
HSE: Manual Handling at Work (INDG143`
  }
},
  {
    id: "MS6_Vehicle_Safety",
    title: "MS6 Vehicle Safety",
    fields: {
      title: "MS6 Vehicle Safety",
      equipment: `Delivery vehicles
Forklift trucks
Cars
Spill kit (for refuelling)`,
      ppe: `High-visibility clothing for pedestrians
Standard site PPE as task-specific (helmet, boots, gloves, eye/ear)`,
      method: `- Use gated “air lock” entry; drivers contact a supervisor to gain access.
- Respect height restrictions for OHL/low structures; use road plates where ground is soft or services present.
- Clearly mark segregated pedestrian routes and crossings; maintain barriers.
- Implement a one-way system with minimal sharp turns.
- Keep materials stacked low near roads; do not obstruct drivers’ sight lines.
- Enforce site speed limit (10 mph); keep roads flat, stable and suited to loads.
- Provide level car parking with safe pedestrian access to compounds.
- Clearly mark loading/unloading bays to prevent misuse.
- Keep routes clear; complete daily checks; ensure beacons/reversing alarms work.
- Use a trained banksman in tight areas; always yield to pedestrians.`,
      training: `.`,
      risks: ``,
      associated: `Operators hold CPCS (or similar); vehicle drivers hold a full driving licence
      
      Struck by moving vehicle
Vehicle–vehicle collision
Overturning of loaded vehicles
Impact with structures/scaffolds
Damage to covers/excavations
Fuel spills during refuelling
Striking overhead/underground services
      
      HSG114: Safe use of vehicles on construction sites
Related MS: MS11 Dumper; MS33 FLT`
    }
  },
  {
    id: "MS7_Digging_Large_Foundations",
    title: "MS7 Digging Large Foundations",
    fields: {
      title: "MS7 Digging Large Foundations",
      equipment: `360 Excavator
Dumpers
Lifting accessories (certified; 6-monthly inspections)
Cable Avoidance Tool (CAT)
Trench boxes
Edge protection
Shovel for hand-dig near services`,
      ppe: `High-visibility jacket
Hard hat
Gloves (appropriate to task/contaminants)
Safety boots
Safety glasses
Hearing protection (as required)`,
      method: `- Obtain current service drawings; survey with CAT to locate services.
- Follow HSG47 safe digging practices; hand-dig trial areas near services.
- Support excavations: batter, step, or use trench boxes to prevent collapse.
- Provide edge protection and secured ladder access.
- Inspect the excavation daily and after events (e.g., heavy rain).
- Segregate plant/pedestrians with barriers; store spoil away from edges.
- Use certified lifting gear; banksman to perform visual checks.
- Maintain good housekeeping to prevent falling materials.`,
      training: ``,
      risks: ``,
      associated: `CPCS/NPORS (excavator/dumper); competent CAT users; 
      site team briefed on permit-to-dig and excavation safety.
      
      Striking underground services
Plant/pedestrian interface injuries
Excavation collapse
Undermining adjacent structures
Falls into excavation
Falling objects into excavation
Plant overturning on poor/steep ground
Exposure to contaminants
Flooding
      
      Permit to Dig in place; MS4 Excavators; HSG47 (safe digging)`
    }
  },
  {
    id: "MS8_Underground_Services",
    title: "MS8 Underground Services",
    fields: {
      title: "MS8 Underground Services",
      equipment: `360 Excavator
Mini Digger
Cable Avoidance Tools
Barriers`,
      ppe: `High-visibility jacket
Hard hat
Safety boots
Eye protection (recommended for strike/projectile risk)`,
      method: `- Obtain utility records and discuss possible diversions with providers.
- Issue a Permit to Excavate; prove work to the permit holder.
- Inspect area for prior service works (scars, furniture, substations).
- Locate services with CAT by a competent operator; mark routes (paint/barriers); sign HV routes.
- Hand-dig trial holes; only use mechanical means to remove hard surfacing.
- Maintain barriers/edge protection; use a banksman when backfilling or in tight areas.
- Keep plant crossing points over utilities to a minimum and protect as required.
- Backfill with correct materials (e.g., sand and warning tape over HV) and update as-built service drawings.`,
      training: ``,
      risks: ``,
      associated: `Operators CPCS/NPORS; competent CAT users with experience locating utilities.
      
      Electrocution from striking HV
Gas ignition/explosion
High-pressure water strikes and projectiles
Plant–pedestrian interface
Flooding from water main strikes
Undermining scaffolds/structures
Costly damage to fibre optics
      
      HSG47: Avoiding Danger from Underground Services; MS4 Excavators`
    }
  },
  {
    id: "MS9_Pumping_Station",
    title: "MS9 Pumping Station",
    fields: {
      title: "MS9 Pumping Station",
      equipment: `Breathing apparatus (as required)
Winch and tripod
Personal air monitors
Harness
360 Excavator
Trench/drag boxes
Lighting`,
      ppe: `Hard hats
Safety harness
Gloves
Safety glasses
RPE/BA
Hearing protection
Safety footwear`,
      method: `- Identify and avoid underground/overhead services; plan emergency/rescue arrangements.
- Operate under a Confined Space entry permit; test atmosphere before entry; wear personal monitors.
- Verify all equipment is tested and in good order; provide adequate lighting.
- Keep escape routes clear; maintain continuous communications.
- Use harness attached to tripod/winch; provide BA if conditions require.
- Control surrounding excavations per MS4/MS7; manage access/egress and falling object risks.`,
      training: ``,
      risks: ``,
      associated: `Confined-space/rescue and BA training for entrants/top man; first aiders present.
      
      Oxygen deficiency and collapse
Falls at/into manholes
Biological hazards from sewage
Falling objects inside the structure
Cuts/bruises from restricted access
Explosion in flammable atmospheres
Heat stress/fainting; amplified noise
Slip hazards from wet surfaces
Flooding risks in confined space
Excavation risks during construction
      
      HSE INDG258 (Confined Spaces)
Confined Spaces Regulations 1997
Related MS: MS4 Excavators; MS10 Confined Spaces; MS7 Digging Large Foundations`
    }
  },
  {
    id: "MS10_Confined_Spaces",
    title: "MS10 Confined Spaces",
    fields: {
      title: "MS10 Confined Spaces",
      equipment: `Tripod & winch
Harness
Torch/lighting
Spark-resistant tools
Radio/communications
Air monitor
(Plant support as needed, e.g., 360 Excavator)`,
      ppe: `High-visibility jacket
Harness
Hard hat
Safety footwear
Gloves
Breathing apparatus (as required)`,
      method: `- Avoid entry where reasonably practicable; appoint a supervisor.
- Issue/operate under a Confined Space entry permit.
- Isolate nearby plant/equipment; ensure they don’t obstruct emergency access.
- Test atmosphere with gas monitors; record results; ventilate (mechanically if needed).
- Ensure openings are adequate for access with equipment; keep routes clear.
- Use spark-resistant tools where flammable atmospheres may be present.
- Prepare/verify rescue plan; provide tripod, winch and harness; test comms.
- Maintain minimum two-person entry with a top man; no lone working.
- Prohibit petrol/diesel equipment in the confined space.
- Keep materials from blocking access/egress; contact emergency services per plan if needed.`,
      training: ``,
      risks: ``,
      associated: `Advanced Confined Space Entry training for foreman/groundworks team members.
      
      Oxygen deficiency/heat stress
Fire/explosion
Ground/structure collapse
Drowning or burial by free-flowing substances
Falling objects
Falls into the space
      
      INDG258: Confined Spaces
L101: Safe Work in Confined Spaces`
    }
  },
  {
    id: "MS11_Dumper",
    title: "MS11 Dumper",
    fields: {
      title: "MS11 Dumper",
      equipment: `Site dumpers
360 Excavator (for loading)
Mini digger (as applicable)`,
      ppe: `High-visibility clothing
Hard hat, safety boots, gloves
Eye/ear protection as required
Seat belt when operating`,
      method: `- Hold valid certification; complete pre-use and weekly PUWER checks.
- Know the route and hazards; keep clear of edges, trenches and soft ground.
- Use ROPS; wear the seat belt at all times.
- Keep to one-way systems; obey the 10 mph limit; avoid sharp turns and harsh braking.
- Keep vision clear; do not overload or obstruct the operator’s view.
- Maintain segregation; give way to pedestrians; use a banksman in tight areas.
- Keep workers out of loading/tipping zones; do not remain seated while being loaded.
- Park safely when unattended; lower skip; switch off plant; remove keys.
- Refuel in a designated area with drip tray; clean spills; replace caps immediately.`,
      training: ``,
      risks: ``,
      associated: `CPCS/NPORS (or similar) for dumper; site briefing on vehicle routes and controls.
      
      Struck-by incidents
Overturning (slope/overload/edge)
Collision with structures/plant
Falls into excavations
Poor visibility during loading
Fuel spill/fire
      
      PUWER 1998 (pre-use checks)
See also MS6 Vehicle Safety`
    }
  },
  {
    id: "MS12_Cutting_Concrete",
    title: "MS12 Cutting Concrete",
    fields: {
      title: "MS12 Cutting Concrete",
      equipment: `Stihl/disc cutter
Water bottle / dust suppression`,
      ppe: `FFP3 mask / JSP Infinity hood
Eye protection
Hearing protection
Safety boots
Gloves`,
      method: `- Inspect tool; fit correct blade for concrete.
- Face-fit tested; clean shaven where tight-fitting RPE is used.
- Segregate the work area; exclude unprotected persons.
- Clear/level the work area; secure footing.
- Use wet dust suppression; keep the cut wet throughout.
- Wear FFP3/JSP hood; monitor dust exposure as required.
- Comply with any permit-to-cut required by the client.
- Refuel only when engine is cool; use a spill tray; replace caps immediately.`,
      training: ``,
      risks: ``,
      associated: `Competent/licensed users for handheld saws; toolbox talk on dust/noise and permits.
      
      Eye injuries from projectiles
Cuts/kickback
Respirable crystalline silica exposure
Dermatitis from concrete
Hand–arm vibration
Noise exposure`
    }
  },
  {
    id: "MS13_Laser_Levels",
    title: "MS13 Laser Levels",
    fields: {
      title: "MS13 Laser Levels",
      equipment: `Laser level
Tripod`,
      ppe: `Standard site PPE (hard hat, hi-vis, boots)
Laser safety glasses if specified`,
      method: `- Check tripod/laser condition; no damage or loose fittings.
- Set tripod on firm, level ground with legs spread for stability.
- Do not look into the beam; do not direct the beam at persons.
- Keep cables/legs out of walkways; tidy the area to prevent trips.`,
      training: ``,
      risks: ``,
      associated: `Users trained/briefed on laser safety and set-up procedures.
      
      Eye damage from laser exposure
Musculoskeletal strain from lifting/carrying kit
Trip hazards from tripod/positioning
      
      AOR 2010 (Control of Artificial Optical Radiation at Work Regulations)`
    }
  },
  {
    id: "MS14_Manholes",
    title: "MS14 Manholes",
    fields: {
      title: "MS14 Manholes",
      equipment: `Excavator
Lifting chains and pins
RPE / gas monitor
CAT (cable avoidance tool)
Vibrating poker`,
      ppe: `Hard hat
Hi-vis
Safety boots
Gloves
RPE/BA as required
Harness (for access control)`,
      method: `- Obtain/mark services; issue Permit to Excavate; segregate the work area.
- Excavate to depth per drawings; support with trench box; provide edge protection.
- Monitor atmosphere where required; pump out groundwater as needed.
- Prepare formation; place blinding; construct base to design.
- Lift and place chamber rings with excavator and certified chains/pins.
- Form inlets/outlets and channels; compact concrete surround with poker.
- Backfill to specification; reinstate and protect ironwork.`,
      training: ``,
      risks: ``,
      associated: `
      
    Plant/lifting operators certified (CPCS/NPORS); competent person for LOLER inspections.Plant–pedestrian interface
Falls into excavation/raised ironwork
Lifting equipment failure
Excavation collapse
Service strikes
Confined space hazards
Manual handling injuries
Flooded excavations
      
      INDG258 Confined Spaces
HSG47 Underground Services
INDG290 Lifting Equipment
Related MS: MS7 Digging Large Foundations; MS8 Underground Services; MS4 Excavators`
    }
  },
  {
    id: "MS15_Petrol_Operated_Equipment",
    title: "MS15 Petrol Operated Equipment",
    fields: {
      title: "MS15 Petrol Operated Equipment",
      equipment: `Disc cutters
Wacker plates/other petrol plant
Approved petrol containers
Drip tray / spill kit`,
      ppe: `Eye protection
FFP3 dust mask (as required)
Gloves
Hearing protection`,
      method: `- Store petrol in sealed, correctly marked containers in a ventilated, shaded area.
- Operate equipment in well-ventilated spaces; never in confined spaces.
- Follow manufacturer’s instructions; keep guards in place.
- Control HAVS and noise exposure; plan task duration/rotation.
- Refuel in a designated area over a drip tray; clean spills; replace caps; remove ignition sources.
- Turn off plant when not in use; allow to cool before refuelling.
- Wipe down equipment after use; dispose of oily rags safely.`,
      training: ``,
      risks: ``,
      associated: `Competent/licensed operators; briefing on HAVS, noise and refuelling controls.
      
      Fire/explosion
Inhalation in confined/poorly ventilated areas
Skin absorption/dermatitis
Noise-induced hearing loss
Hand–arm vibration
Injury from projectiles
      
      INDG370 Fire & Explosion (DSEAR)
L140 Hand–Arm Vibration
INDG362 Noise at Work`
    }
  },
   {
    id: "MS16_Use_of_Power_Tools",
    title: "MS16 Use of Power Tools",
    fields: {
      title: "MS16 Use of Power Tools",
      equipment: `Drills
Angle grinders
Reciprocating saws
Impact drivers
Extension leads and RCD protection`,
      ppe: `Eye protection
Hearing protection
Gloves
Dust mask (FFP3) as required
Safety boots`,
      method: `- Inspect tools before use; record weekly PUWER checks.
- Use 110V or battery tools where possible; check cables and plugs.
- Keep cables clear of walkways and cutting paths.
- Use RCD protection at all times.
- Select the correct tool and accessory for the job.
- Keep guards in place; do not override safety switches.
- Maintain good footing and balance; work in well-lit areas.
- Stop the tool before setting it down; disconnect when not in use.
- Refuel only in designated areas with spill control (for petrol tools).
- Clean and return tools to storage after use.`,
      training: ``,
      risks: ``,
      associated: `Operators briefed on correct tool use, PUWER checks, HAVS and noise awareness.
      
      Electric shock
Cuts from moving blades/discs
Eye injuries from projectiles
Noise-induced hearing loss
Hand–arm vibration (HAVS)
Slips/trips from trailing cables
Fire from petrol tools
      
      PUWER 1998 (Provision and Use of Work Equipment)
HSG85 Electricity at Work
L140 Hand–Arm Vibration
INDG362 Noise at Work`
    }
  },
  {
    id: "MS17_Road_Plates",
    title: "MS17 Road Plates",
    fields: {
      title: "MS17 Road Plates",
      equipment: `Road plates (steel)
Lifting chains / hooks
360 Excavator / crane (as required)
Road pins and edge markers`,
      ppe: `Hi-vis jacket
Hard hat
Safety boots
Gloves
Eye protection`,
      method: `- Inspect road plates for defects or delamination.
- Confirm lifting points are sound and capacity adequate.
- Set out position to maintain lane width and bearing capacity.
- Lift plates with chains/hooks rated for the weight.
- Lay evenly on compacted base; prevent rocking or movement.
- Secure with road pins or recess to prevent sliding.
- Fit anti-skid surface or bituminous coating.
- Provide ramps or wedge ends where required to avoid trip edges.
- Remove and store safely when no longer needed.`,
      training: `.`,
      risks: ``,
      associated: `Operators to hold CPCS/NPORS (excavator/crane) and have lifting awareness
      
      Trapping or crushing during lifting
Vehicle impact from unsecured plates
Trips on uneven edges
Plate movement under traffic
Hand injuries when guiding plates
      
      HSE GS6 (Overhead lines)
LOLER 1998 (lifting)
HSG150 (Construction Safety)`
    }
  },
  {
    id: "MS18_Roadworks",
    title: "MS18 Roadworks",
    fields: {
      title: "MS18 Roadworks",
      equipment: `Barriers and signage
Traffic cones
Lighting towers
Stop/go boards
Bituminous materials
Roller / compactor`,
      ppe: `Hi-vis (Class 3)
Safety boots
Hard hat
Gloves
Hearing protection (if near plant)
Eye protection`,
      method: `- Follow approved traffic management plan; obtain permit if required.
- Position signage, cones and barriers per Chapter 8.
- Maintain clear separation between live traffic and workers.
- Use lighting towers for night work; ensure visibility and reflectors.
- Coordinate deliveries and plant movements with traffic marshals.
- Keep walkways clear and surfaces even.
- Control dust and noise; damp down as needed.
- Remove debris, waste and barriers promptly on completion.`,
      training: `.`,
      risks: ``,
      associated: `Street Works/Chapter 8 awareness for operatives; banksman and TM training for supervisors
      
      Vehicle strike from passing traffic
Pedestrian interface with plant
Slips and trips on uneven surface
Noise and dust exposure
Heat burns from bitumen
      
      Chapter 8 – Traffic Signs Manual
NRSWA 1991 (Street Works)
MS6 Vehicle Safety`
    }
  },
  {
    id: "MS19_Carlow_Tank",
    title: "MS19 Carlow Tank",
    fields: {
      title: "MS19 Carlow Tank",
      equipment: `Crane / excavator
Lifting chains
Gas monitor
Harness and tripod (for entry)
Pump / dewatering equipment
Lighting`,
      ppe: `Hi-vis
Hard hat
Safety boots
Gloves
Harness (for confined space)
RPE / BA as required`,
      method: `- Verify design drawings and lifting plan.
- Issue permit-to-dig and confined-space entry permit as applicable.
- Excavate to formation level with edge protection and shoring.
- Lift and install tank components per lift plan.
- Use gas monitors to test atmosphere; ventilate during works.
- Use tripod, harness and winch for safe access/egress.
- Backfill and compact to specification; record tests.
- Maintain safe access, lighting and emergency egress.`,
      training: ``,
      risks: ``,
      associated: `Appointed person (lifting), confined-space trained operatives, CPCS operators.
      
      Lifting failure
Struck by plant or suspended load
Confined-space hazards
Falls into excavation
Oxygen deficiency
Flooding or collapse
      
      Confined Spaces Regulations 1997
LOLER 1998
PUWER 1998
HSG150 Construction Safety`
    }
  },
  {
    id: "MS20_Kerb_Laying",
    title: "MS20 Kerb Laying",
    fields: {
      title: "MS20 Kerb Laying",
      equipment: `Mechanical kerb lifter
Concrete bed and haunch tools
String line
Spirit level
Rubber mallet
Trowels`,
      ppe: `Hard hat
Hi-vis
Safety boots
Gloves
Eye protection`,
      method: `- Review kerb line drawings and type (HB/BN/quadrant).
- Set out using string line or total station to required level.
- Prepare and compact sub-base; install concrete bed to correct depth.
- Lift and place kerbs with mechanical lifter; align to string line.
- Tap down with rubber mallet; check line and level frequently.
- Fill joints with mortar where required; clean faces.
- Apply backing/haunch concrete to support the kerb.
- Protect from trafficking until concrete has cured.`,
      training: ``,
      risks: ``,
      associated: `Groundworks operatives briefed and competent in kerb laying and concrete works.
      
      Manual handling injuries
Crushed fingers during lifting/placing
Trips or falls near open excavations
Eye injuries from cement splashes
Dust inhalation
      
      BS7533 Pavement Construction
MS4 Excavators
MS6 Vehicle Safety`
    }
  },
  {
    id: "MS21_Slab_Laying",
    title: "MS21 Slab Laying",
    fields: {
      title: "MS21 Slab Laying",
      equipment: `Excavator.
Forklifting attachment.
Cut off saw.
Water bottle for dust suppression.
Manual handling lifting devices.`,
      ppe: `High Visibility Clothing.
Dust Mask FFP3
Safety Boots
Safety Glasses
Hard Hat
Gloves`,
      method: `- Clear the work area of obstructions.
- Position pallets near the workface with forklift/telehandler.
- Use lifting aids/devices to place slabs; avoid manual lifts where practicable.
- Cut slabs to fit as needed (see MS12 Cutting Concrete); use dust suppression.
- Use a banksman for movements in tight areas.
- Maintain housekeeping and safe access routes.`,
      training: ``,
      risks: ``,
      associated: `Manual handling techniques; competent saw operators; certified plant/telehandler operators.
      
      Manual handling injuries
Exposure to silica dust
Trapping/crushing
Cuts/abrasions from handheld tools
Struck by moving vehicles
Dermatitis
Trips and falls
      
      MS4 360 Excavators
MS12 Cutting Concrete
MS1 Manual Handling
INDG143 Manual Handling at Work
CIS54 Dust control on cut-off saws`
    }
  },
  {
    id: "MS22_Block_Brickworks",
    title: "MS22 Block / Brickworks",
    fields: {
      title: "MS22 Block / Brickworks",
      equipment: `FLT / Teleporter
Cut off saw
Water bottle for dust suppression.`,
      ppe: `High Visibility Clothing.
Dust Mask FFP3
Safety Boots
Safety Glasses
Hard Hat
Gloves (EN 388)`,
      method: `- Clear work area; establish levels to engineered drawings.
- Deliver pallets to point of use with FLT/teleporter.
- Handle blocks/bricks with correct manual handling techniques.
- Install DPC and ties per spec.
- Cut blocks where required with dust suppression; control slurry and debris.
- Maintain segregation from traffic and protect edges/openings.`,
      training: `.`,
      risks: ``,
      associated: `Manual handling; competent cut-off saw users; certified FLT/telehandler operators
      
      Manual handling injuries
Silica dust exposure
Trapping/crushing
Cuts/abrasions
Vehicle interface
Dermatitis from cement
Trips and falls
      
      MS12 Cutting Concrete
MS1 Manual Handling
INDG143 Manual Handling at Work
CIS54 Dust control on cut-off saws`
    }
  },
  {
    id: "MS23_Ride_on_Roller",
    title: "MS23 Ride on Roller",
    fields: {
      title: "MS23 Ride on Roller",
      equipment: `Ride on roller`,
      ppe: `High Visibility Clothing
Hearing Protection
Safety Boots
Hard Hats`,
      method: `- Identify services and mark crossing points; protect with plates/barriers.
- Select appropriate roller to minimise WBV exposure.
- Brief operator on nearby structures/excavations; avoid operating near open trenches.
- Segregate pedestrians with barriers; use a banksman where visibility is restricted.
- Use seat belt and ensure ROPS is in place.
- Operate parallel to slopes; avoid transverse running.
- Park in a secure location; remove keys; refuel only in designated areas with spill control.`,
      training: ``,
      risks: ``,
      associated: `Plant certification for ride-on roller; banksman/signaller where required.
      
      Crush injuries
Whole-body vibration (WBV)
Struck-by/fatality from moving roller
Dermatitis during refuelling
Damage to services/structures
Overturning on uneven ground
Excavation collapse
      
      HSG144 The safe use of vehicles on construction sites`
    }
  },
  {
    id: "MS24_Remote_Trench_Roller",
    title: "MS24 Remote Trench Roller",
    fields: {
      title: "MS24 Remote Trench Roller",
      equipment: `Remote Trench Roller`,
      ppe: `High Visibility Clothing
Hearing Protection
Safety Boots
Hard Hats`,
      method: `- Verify trench width, access/egress; support sides with trench box if required.
- Complete pre-use checks; confirm controls/neutral return; test safety lockouts.
- Mark underground/overhead services; plan route and operating area.
- Operate remotely from a safe position; do not enter trench with the roller.
- Run up/down slopes only; avoid traversing across slopes.
- Refuel in designated area with spill kit; replace caps; check for leaks.
- Park safely; engage parking brake; idle before shutdown; record inspections.`,
      training: ``,
      risks: ``,
      associated: `Plant certification for remote trench roller; awareness of trench safety and PUWER checks.
      
      Impact injuries to pedestrians/user
Noise-induced hearing loss
Service strikes
Collisions with plant/structures
Trench collapse
Projectiles from under base
      
      ACOP L22 Safe use of work equipment (PUWER)`
    }
  },
  {
    id: "MS25_Stihl_Saw",
    title: "MS25 Stihl Saw",
    fields: {
      title: "MS25 Stihl Saw",
      equipment: `Stihl Saw
Dust Suppression Water Bottle.`,
      ppe: `High Visibility Clothing
Hearing Protection
Safety Boots
Hard Hats
Eye Protection
FFP3 Dust Mask`,
      method: `- Inspect the saw and guards; fit correct blade for the material.
- Wear close-fitting clothing; secure hair; don gloves, eye/ear protection and FFP3 RPE.
- Cordon the area; exclude unprotected persons; ensure good ventilation.
- Use wet dust suppression when cutting concrete/masonry; control run-off.
- Direct sparks away from operator/combustibles when cutting metal; keep extinguishers to hand.
- Maintain firm footing; keep both hands on the saw; avoid awkward positions.
- Refuel only in designated area; use drip tray; replace caps; clean spills.
- Switch off and cool before storage; return to secure location; record PUWER checks.`,
      training: ``,
      risks: ``,
      associated: `Competent operators for cut-off saws; face-fit tested for tight-fitting RPE; 
      toolbox talk on dust/noise/kickback.
      
      Cuts and abrasions
Projectiles
Fire from petrol-driven tools
Hand–arm vibration (HAVS)
Noise-induced hearing loss
Musculoskeletal strain
Silicosis/RCS exposure
      
      INDG461 Using cut-off saws
MS12 Cutting Concrete
MS15 Petrol Operated Equipment`
    }
  },
    {
    id: "MS26_Drainage_Laying",
    title: "MS26 Drainage Laying",
    fields: {
      title: "MS26 Drainage Laying",
      equipment: `360 Excavator
Dumper
Lifting Chains
Cut-off Saw`,
      ppe: `High Visibility Clothing
Hearing Protection
Safety Boots
Hard Hats
Eye Protection
FFP3 Dust Mask`,
      method: `- Obtain service layouts; liaise with suppliers about diversions/isolations.
- CAT scan and mark routes; follow MS8 Underground Services for safe digging.
- Assess ground conditions; prevent ground movement/excavation collapse.
- Manage contaminated ground (segregate on membrane; licensed removal).
- Excavate to design depth with adequate reach; keep plant back from edges.
- If ≥1.5 m deep, batter back or install trench support; consider MS10 if entry required.
- Provide safe access (secured ladder/steps); segregate the work area with barriers.
- Lift and place pipes with chains and a banksman; lay on specified stone bed.
- Backfill/compact to levels; maintain safe access and housekeeping.`,
      training: ``,
      risks: ``,
      associated: `Certified plant/machinery operators; competent cut-off saw users; trained banksman.
      
      Plant strikes
Excavation collapse
Structural undermining
Falling objects
Service strikes (UG/overhead)
Manual handling injuries
Contamination exposure
      
      MS1 Manual Handling
MS4 360 Excavators
MS7 Digging Large Foundations
MS8 Underground Services
MS10 Confined Spaces
MS14 Manholes
MS15 Petrol Operated Equipment
INDG199 Workplace Transport
GS6 Overhead Powerlines
HSG47 Underground Services`
    }
  },
  {
    id: "MS27_Lone_Working",
    title: "MS27 Lone Working",
    fields: {
      title: "MS27 Lone Working",
      equipment: `Varies by task; lone worker must be competent in any equipment used.`,
      ppe: `Hard Hat
High Visibility Clothing
Safety Footwear
Eye Protection
RPE
Gloves`,
      method: `- Assess the individual (fitness/health) and the working environment.
- Avoid lone working where practicable; otherwise reduce risk to low.
- Confirm equipment is suitable for solo use; provide training and instructions.
- Set monitoring: scheduled check-ins/visits; test contact procedures.
- Ensure the lone worker has emergency contacts, first aid kit, extinguisher.
- Define out-of-hours arrangements and escalation routes.`,
      training: ``,
      risks: ``,
      associated: `Task- and equipment-specific training for the lone worker; site induction.
      
      Slips, trips and falls
Medical collapse without assistance
Falling objects
Vehicle collisions (if operating plant)
Tool-related injuries (entanglement, cuts, eye injury)
Noise, HAVS, hazardous substances
      
      INDG143 Manual Handling at Work
INDG73 Working Alone`
    }
  },
  {
    id: "MS28_Tarmacadam",
    title: "MS28 Tarmacadam",
    fields: {
      title: "MS28 Tarmacadam",
      equipment: `Paver
Roller`,
      ppe: `Hard Hat
High Visibility Clothing
RPE
Safety Footwear
Gloves`,
      method: `- Implement traffic control/road closure and TM plan before works.
- Verify operator competency; complete pre-use checks.
- Barrier/segregate the paving operation; maintain emergency access.
- Keep area clear of combustibles; position fire extinguishers nearby.
- Provide PPE/RPE and maintain safe distance from paver and hot materials.
- Use lighting for night work; ensure visibility of workers and plant.`,
      training: ``,
      risks: ``,
      associated: `NRASWA/Street Works for highway operations; plant operator tickets (CPCS) as applicable.
      
      Burns from hot materials
Respiratory irritation/fine dust
Eye irritation
Skin irritation/dermatitis
Manual handling injuries
Whole-body vibration (WBV)
      
      HSG136 Workplace Transport
L22 Safe Use of Work Equipment
INDG136 Hazardous Substances at Work`
    }
  },
  {
    id: "MS29_Concrete_Pouring",
    title: "MS29 Concrete Pouring",
    fields: {
      title: "MS29 Concrete Pouring",
      equipment: `Concrete Wagon
Vibrating Poker
Power Float`,
      ppe: `Eye Protection
Gloves
Safety Footwear
High Visibility Clothing
RPE (if mixing)
Hard Hat
Hearing Protection`,
      method: `- Provide safe access for delivery wagons; brief and bank as required.
- Verify ground stability around excavations before pouring.
- Exclude non-essential personnel from pour area; maintain barriers.
- Wear full PPE; cover skin to prevent wet cement burns.
- Manage HAVS from pokers/power floats via rotation and WELs.
- Use chutes/pumps to reduce manual handling; prevent unauthorised access.
- Fence the pour until cured; implement environmental washout controls.`,
      training: ``,
      risks: ``,
      associated: `Competent plant operators; supplier-provided licensed concrete delivery; supervision on-site.
      
      Slips/trips and rebar impalement
Cement burns/dermatitis
Entanglement in moving plant
Noise/HAVS exposure
Lifting equipment failure (skips)
Vehicle interface with wagons
      
      MS1 Manual Handling
MS16 Power Tools
MS22 Noise
INDG136 Hazardous Substances
EH40 Workplace Exposure Limits`
    }
  },
  {
    id: "MS30_Site_Visitors",
    title: "MS30 Site Visitors",
    fields: {
      title: "MS30 Site Visitors",
      equipment: `No specific equipment.`,
      ppe: `Hard Hat
Safety Footwear
High Visibility Clothing`,
      method: `- If concrete is to be delivered to site, ensure safe access for the delivery wagon.
- Use a banksman to back the wagon into position for pouring.
- Exclude persons not involved in the pour from the area.
- Wear correct PPE and keep skin covered to prevent cement burns.
- Rotate work using handheld equipment to avoid exceeding WEL for vibration.
- Barrier poured excavations; fence off until concrete has cured.`,
      training: ``,
      risks: ``,
      associated: `Site-specific induction; visitors escorted by a supervisor.
      
      Limited site awareness (public/visitors)
Slips, trips and falls
Struck by falling objects
Vehicle/plant interface
Falls into excavations or manholes
Exposure to dust/other substances
Projectiles from construction activities
      
      HSG151 Protecting the Public
HSG150 Health and Safety in Construction`
    }
  },
{
  id: "ms-kerb-laying",
  title: "Laying Precast Kerbs",
  fields: {
    title: "Laying Precast Concrete Kerbs",
    equipment: "Sample equipment A\nSample equipment B",
    ppe: "Hard hat\nHi-vis vest\nSafety boots",
    method: `- Review kerb line drawings, radii, levels and tie-ins; confirm kerb type (HB, BN, quadrants) and bed/haunch concrete class.
- Preparation: Form and compact sub-base to required level/width; install temporary line pins and taut string line (or total station) for line/level.
- Concrete bed: Place fresh bed to specified depth/width; strike level following string line; keep working face clean.
- Handling: Use mechanical kerb lifter/vacuum lifter; present each unit to line; lower onto bed without twisting; tap down with rubber mallet to level.
- Alignment: Maintain face to string line; check joint tightness and uniformity; cut units with saw/wet-cut where required; use quadrant/splay units for radii where available.
- Levels & falls: Check every unit with level; confirm crossfall and upstand relative to finished surface.
- Gaps & joints: Maintain specified joint gap; fill with mortar where required; clean faces immediately.
- Haunching: Once a run is aligned, place backing/haunch concrete to specified height/width; fully support rear and partially cover sides; do not disturb alignment.
- Interfaces: Install gully kerbs/kerb inlets to correct level; check transitions at crossings, bellmouths and tactile paving zones.
- Protection & cure: Protect from trafficking; allow concrete to cure per spec; prevent early loading.
- QA records: Record line/level checks; radii checks; materials tickets for concrete; photo record at tie-ins.`,
    training: "Site induction; Task briefing; Specific plant training",
    risks: "Slips/trips; Manual handling; Dust exposure",
    associated: "RA-TEST-001; RA-TEST-002"
  }
},

// converted with prefills
{
  id: "ms-kerb-edgings-pcc",
  title: "Installing Edgings and Paving Restraints",
  fields: {
    title: "Installing Edgings and Paving Restraints",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Confirm edging type, level and offset; set string line to finished level minus paving thickness.
- Excavate and compact formation; place sub-base where specified; ensure uniform support along length.
- Lay concrete bed to spec; place edgings to line/level; use spacers where required; check straightness with straightedge.
- Apply backing/haunch concrete; finish neatly below paving level; protect until initial set.
- Verify falls/cambers; record checks; hand back only after curing.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-concreting-foundations",
  title: "Concreting Strip/Pad Foundations",
  fields: {
    title: "Concreting Strip/Pad Foundations",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Pre-pour checks: Excavation dimensions and formation level accepted; bearing stratum confirmed; water removed; permit/live checks complete.
- Blinding: Place and level blinding if specified; ensure clean, sound surface free of loose material.
- Reinforcement: Fix rebar to drawings; maintain cover with chairs/spacers; secure laps/links; fit starter bars/hold-downs; QA photos and pre-pour inspection signed.
- Formwork (if used): Erect to line/level; brace; apply release agent; check dimensions and diagonals.
- Pour planning: Confirm mix, pump access, pour sequence, workforce, lighting, vibration equipment, curing materials and contingency for weather.
- Delivery control: Check delivery tickets; verify mix/consistency; carry out slump and take cubes if specified; record times.
- Placement: Pump/chute concrete to lowest point first; place in layers; avoid segregation; do not free-fall against rebar excessively.
- Compaction: Vibrate with poker in a systematic pattern; avoid over-vibration and rebar contact; ensure full encapsulation of reinforcement.
- Level/finish: Strike to level using screed/box rule; re-check anchor/bolt levels and positions; finish as required (float/brush).
- Curing: Apply curing membrane/sheeting; protect from rain/frost/heat; maintain curing period to spec.
- Demould/strip: Strip formwork only after achieving required strength; make good defects; record as-built levels.
- Hold points: Pre-pour inspection; cube test registration; post-pour finish/level check; client/engineer sign-off.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-concreting-ground-slab",
  title: "Concreting Ground-Bearing Slab (with DPM/mesh)",
  fields: {
    title: "Concreting Ground-Bearing Slab (with DPM/mesh)",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Sub-base: Compact to spec; level and proof-roll; record tests where required.
- DPM/insulation: Lay damp proof membrane continuous with taped laps; protect from puncture; lay insulation boards if specified; cover with slip membrane where required.
- Reinforcement: Place mesh to drawings; support on chairs to maintain cover; tie laps; install crack inducers/dowels/joint formers as detailed.
- Pour sequence: Confirm bay layout, access, pump route and finishing method (vibrating beam/power float).
- Placement: Distribute concrete evenly; avoid walking mesh off chairs; compact using beam/poker as appropriate.
- Level & finish: Strike to datum rails; check FF/FL or level tolerance; finish (float/trowel/brushed) to specification.
- Joints: Form saw cuts or induced joints at specified locations/timings; install sealant/backer rod where specified.
- Curing: Spray membrane or apply curing sheets; control environment (draughts/temperature); keep off until strength achieved.
- QA: Record delivery tickets, slump, cube results, bay references and curing times; as-built survey if required.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-brickwork-manhole",
  title: "Brickwork to Manholes/Chambers",
  fields: {
    title: "Brickwork to Manholes/Chambers",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Materials: Engineering bricks, sulphate-resisting cement mortar to spec; step irons/ladder where specified.
- Base/benching: Confirm base level and outlet/inlet locations; ensure working area is dry; set out walls to centre and pipe openings.
- Laying: Butter perp and bed; lay to gauge using line and pins; keep perp joints plumb and staggered; maintain bond; cut neatly around pipe entries.
- Walling: Build up evenly on all sides; check plumb/level frequently; clean mortar smears as you go.
- Channels & benching: Form smooth channels with fall to outlet; bench at required slope; finish trowel-smooth.
- Cover slab & frame: Set mortar bed; position slab (lift plan if needed); fit frame to level/road camber; pack and point; check cover seating.
- Air/water test if specified; record results; ensure steps/ladder installed to orientation and spacing; clean site and remove waste.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-brick-block-foundations",
  title: "Brick/Blockwork on Foundations up to DPC",
  fields: {
    title: "Brick/Blockwork on Foundations up to DPC",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Set out: Check foundation lines/levels; snap chalk lines; confirm cavity widths/tolerances.
- Damp proof: Place DPM/DPC at specified course; ensure laps to thresholds/cavities; keep clean from mortar droppings.
- Laying: Establish gauge; lay first course to line/level; maintain joint thickness; keep perps plumb; use line and pins each lift.
- Cavity/ties: Install wall ties at correct gauge and spacing; keep cavities clean; insert cavity trays and weeps at openings.
- Returns/openings: Use profiles or storey rods; check squareness and diagonals; install lintels per details.
- QA: Frequent level/plumb checks; record lift heights; protect fresh work from frost/rain; tidy and clear cavities before closing.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-subbase-paving",
  title: "Sub-base Preparation for Paving",
  fields: {
    title: "Sub-base Preparation for Paving",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Excavation: Reduce level to formation; remove soft spots; backfill with approved material.
- Geotextile (if specified): Lay and overlap to manufacturer instructions; prevent wrinkles.
- Placement: Lay Type 1 (or specified) in layers; level and compact to required thickness.
- Compaction: Use calibrated compactor/roller; achieve target density/EV2 if specified; record passes and test results.
- Tolerances: Check falls/camber and level against design; correct deviations; hand over for edging/paving works.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-gully-install",
  title: "Install Road Gully and Connection",
  fields: {
    title: "Install Road Gully and Connection",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Set out gully position and finished cover level relative to kerb line and carriageway.
- Excavate pit; form and compact base; place concrete base to spec; level gully pot with temporary wedges.
- Connect: Lay short pipe to main; ensure fall; seal joints; surround as specified.
- Set frame/cover: Bed on mortar; set to finished surface level; align with kerb; form concrete surround where specified.
- Backfill and compact around pot; keep grating protected until surfacing.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-hand-dig-around-services",
  title: "Hand Digging Around Known Services",
  fields: {
    title: "Hand Digging Around Known Services",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Mark out service zone from drawings and CAT & Genny; brief crew.
- Use insulated hand tools only; no picks; expose service gradually; maintain visual on service route.
- Support exposed service if undermined; photograph and measure depth/offset; protect with sleeves/boards while working.
- Backfill with fine material; surround to spec; install marker tape; update redlines.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-excavation-trenching",
  title: "Excavation & Trenching",
  fields: {
    title: "Excavation & Trenching",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Scope: Machine and hand excavation for foundations, service trenches and pits; includes temporary works, edge protection, inspections, and backfilling.
- Pre-start: Review PCI, CPP and drawings; complete risk assessment and method statement briefing (RAMS) to all operatives; appoint TWC/TWS where required; confirm permits (permit-to-dig) approved.
- Underground/overhead services: Obtain up-to-date utility plans; mark routes; complete CAT & Genny scan by trained person; hand-dig trial holes to positively identify services; establish safe clearance; apply GS6 controls for any OHL.
- Temporary works: Select solution (trench boxes/shoring/hydraulic bracing/battering to safe angle) per design; install by competent operatives; no entry until TWC/TWS has confirmed installation meets design.
- Edge protection & access: Install barriers/fencing; ladder or stair access fixed and extending 1m above landing; keep edges free of spoil/plant (≥2 m unless engineered protection provided).
- Plant & equipment: CPCS/NPORS operators only; daily pre-use checks recorded; fit beacons/reversing alarms; banksman for all manoeuvres in works area.
- Excavation process: Machine to within tolerance; final trim by hand; stockpile spoil at designated area on firm ground with bunding; prevent surcharge on trench edges.
- Inspections: Competent person to inspect at start of shift, after any event likely to have affected stability (e.g., heavy rain), and after each change; record in excavation register.
- Environmental controls: Dust suppression (water mist), silt control at dewatering points, noise/vibration managed; segregate contaminated arisings if encountered; stop work if unexpected contamination/UXO discovered.
- Interfaces: Maintain pedestrian/vehicle segregation; coordinate with other trades and deliveries per traffic management plan.
- Backfill & reinstatement: Install services/structures; backfill in layers with specified material; compact to specification using calibrated equipment; reinstate surface/temporary works removed under control.
- Hold points: Permit-to-dig issue; TWC check of support; inspection acceptance prior to entry; engineer sign-off on formation level; QA records filed.
- PPE: Minimum boots with midsole, helmet, hi-vis, gloves; RPE/eye/ear protection as task-specific.
- Emergency: Rescue plan for collapse; first aiders on site; emergency services contact posted; stop-work authority to all staff.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-drainage-manhole-install",
  title: "Drainage & Manhole Installation",
  fields: {
    title: "Drainage & Manhole Installation",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Scope: Install foul/storm drainage, manholes, inspection chambers and laterals; testing and backfilling.
- Planning: Review drainage layout, levels, bedding, pipe class and manhole schedules; confirm temporary works for manhole excavations; agree lifting plan for precast rings/covers.
- Utilities/permits: Confirm permit-to-dig; complete service scans and trial holes; mark exclusion zones.
- Excavation: Excavate trench/manhole to design depth/benching; control groundwater via sump/pump and silt socks; support sides as designed; maintain access and edge protection.
- Bedding & laying: Lay granular or concrete bed to line/level; place pipes with correct jointing lubricant; ensure spigots face upstream; maintain gradient using laser/levels; provide surround to specification.
- Manholes: Lift precast rings using approved lifting eyes/chain set; install base/soakaway crates per design; form benching and channels with fall to outlet; fit steps or ladders; fit cover/slab to required loading class.
- Testing: Air/water test per spec and record; rectify leaks; CCTV if specified.
- Backfill & compaction: Selected material in layers; compact with appropriate plant avoiding pipe displacement; install marker tape/mesh.
- Quality controls: As-built survey of inverts and positions; inspection sign-off by Engineer; maintain ITP/checklists.
- Environmental: Manage arisings; segregate contaminated soils; contain concrete washout; noise/dust controls in place.
- Traffic/pedestrian safety: Maintain barriers; signage; banksman for plant movements; lighting for low visibility.
- PPE & training: Confined space controls if entry to chamber is required (permit, gas monitor, rescue plan); operative training recorded.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-ducts-utilities",
  title: "Service Duct Installation (Electric/Comms/Water)",
  fields: {
    title: "Service Duct Installation (Electric/Comms/Water)",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Scope: Install multi-way ducts, draw pits and marker systems for utilities.
- Pre-start: Review utility provider standards; confirm duct sizes, colours, spacings, depth, and separation distances; agree inspection/test requirements.
- Services avoidance: HSG47 process—plans, locate, safe dig; establish offsets from existing services; mark routes; trial holes at crossings.
- Trenching & support: Excavate and support as designed; maintain trench width for duct spacings; control water ingress.
- Duct placement: Install ducts on sand/selected bedding; maintain separation and cover; install spacers where specified; bend radii per manufacturer limits.
- Draw pits/chambers: Install to level; provide duct entries with seals; fit draw ropes; install covers per loading class.
- Marking & warning: Install marker tape/tiles and route markers; update red-line drawings.
- Testing & QA: Mandrel/pressure test where specified; continuity ropes installed; record test sheets.
- Backfill: Selected fine fill around ducts; compact to lifts; reinstatement to specification.
- Commissioning: Handover to utility provider with as-builts and test records.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-kerbs-paving",
  title: "Kerbing, Edgings & Paving",
  fields: {
    title: "Kerbing, Edgings & Paving",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Scope: Install kerbs, edgings, and paved footways/roads including sub-base and bedding.
- Preparation: Confirm setting out; establish lines/levels; verify subgrade CBR and formation.
- Sub-base: Place Type 1 to thickness; compact in layers with calibrated compactor; record passes/EV2 if specified.
- Kerb install: Mechanical kerb lifter or vacuum lifter; lay on concrete bed to line/level; provide backing haunch; check transitions/radii; provide weep holes if required.
- Paving: Lay bedding (sand/mortar/bituminous) per spec; install units to pattern; maintain joint width; cut with wet methods/on-tool extraction; compact/finish and joint (sand or mortar).
- Interfaces: Protect adjacent works; maintain access routes; control traffic with barriers and signage.
- QA: ITP checks on lines, levels, falls; cube tests if structural concrete used; record compaction and materials certificates.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-subbase-earthworks",
  title: "Earthworks Formation & Sub-base Construction",
  fields: {
    title: "Earthworks Formation & Sub-base Construction",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Scope: Bulk earthworks to formation; improvement/stabilisation and sub-base placement.
- Surveys & testing: Topo and setting out confirmed; formation tests (CBR/plate bearing); soil classification; contamination check from SI.
- Method: Strip topsoil; bulk cut/fill to design; moisture condition to achieve compaction window; lime/cement stabilisation if specified with dust controls.
- Compaction: Layer thickness to spec; achieve % MDD/EV2 targets; record roller passes and tests.
- Drainage: Maintain falls; install temporary drainage; prevent ponding; protect exposed formation.
- Environmental: Silt control; wheel wash; dust suppression; noise/vibration monitoring where required.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-concrete-foundations",
  title: "Concrete Foundations & Ground Beams",
  fields: {
    title: "Concrete Foundations & Ground Beams",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Scope: Formwork/rebar placement and concrete pour for bases, pads and ground beams.
- Temporary works: Formwork falsework designed and checked; edge protection and safe access to pour points.
- Reinforcement: Fix per drawings; chairs/spacers to maintain cover; inspect and record before pour.
- Embedments: Set anchor bolts/inserts to template; verify line/level.
- Concrete supply & QA: Confirm mix, slump, temperature; cube samples; pump or chute with washout control; vibrate/compact; finish; curing regime applied.
- Pour controls: Exclusion zone; communications between pump operator, concreters and banksman; weather monitoring (wind/rain/frost/heat) and contingency.
- Post-pour: Strike forms per design strength; finish checks; as-builts; protect edges.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-backfill-reinstatement",
  title: "Backfilling & Reinstatement",
  fields: {
    title: "Backfilling & Reinstatement",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Scope: Controlled backfilling of trenches/excavations and surface reinstatement.
- Materials: Confirm specification for surround, selected backfill and capping/sub-base.
- Method: Place in layers; compact with appropriate plant; protect services with marker tapes/tiles; reinstate surfacing to match existing or design.
- QA: Compaction tests recorded; level checks; photographic records; sign-off by Engineer.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-dewatering",
  title: "Dewatering & Groundwater Control",
  fields: {
    title: "Dewatering & Groundwater Control",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Scope: Manage water ingress to excavations and formation levels.
- Assessment: Review hydrology; select method (sump pumping, well points, spears, cut-off trenches).
- Controls: Position pumps outside excavation where possible; secure discharge hoses; fit silt socks or settlement tanks; route to approved outfall.
- Safety: Electrical supplies via 110V/transformers; RCD protection; cable routing away from plant routes; inspect after rainfall.
- Monitoring: Check excavation stability; re-assess support; record pump maintenance and volumes; prevent erosion.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-traffic-management",
  title: "Traffic Management & Deliveries",
  fields: {
    title: "Traffic Management & Deliveries",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Scope: Manage plant, HGVs and deliveries within site boundary.
- Plan: Traffic Management Plan within CPP; one-way systems where feasible; segregation with barriers; designated banksmen.
- Controls: Avoid reversing; where necessary use trained banksman, alarms and cameras; timed deliveries; gate control; public interface controls at boundary.
- Pedestrian safety: Marked walkways; crossing points; lighting; stop–go procedures.
- Inspections: Daily route checks; adapt plan as phases change; brief changes via toolbox talks.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-lifting-ops",
  title: "Lifting Operations (Excavators/Crane Assist)",
  fields: {
    title: "Lifting Operations (Excavators/Crane Assist)",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Scope: Lifting kerbs, manhole rings, pipes and reinforcement with excavator or crane.
- Planning: Appointed Person prepares lift plan; select equipment and accessories; confirm ground bearing capacity and outrigger mats.
- Team: CPCS operators; trained slinger/signaller; lift supervisor appointed.
- Controls: Pre-use inspection of accessories; attach via rated points; exclusion zone; taglines where required; weather monitoring (wind thresholds).
- Execution: Test lift; keep load low; controlled slewing; never lift over persons; secure landing zone; de-rig and store gear; complete lift log.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-trial-holes",
  title: "Service Location Trial Holes",
  fields: {
    title: "Service Location Trial Holes",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Scope: Hand-dug verification pits to confirm utility positions and depths.
- Method: Scan with CAT & Genny; mark; hand-dig using insulated tools; expose service fully; support sides for deeper pits; photograph and measure; update drawings.
- Controls: Permit-to-dig; barriers and signage; restore surface; record cards placed where required.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-contaminated-land",
  title: "Unexpected Contamination Procedure",
  fields: {
    title: "Unexpected Contamination Procedure",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Trigger: Odours, discoloured soils, asbestos fragments, oil sheen, or abnormal materials encountered.
- Immediate actions: Stop work; make area safe; establish exclusion zone; inform Site Manager/Environmental Specialist.
- Controls: Sample and classify; segregate and cover arisings; use appropriate PPE/RPE; damp down; arrange licensed carrier; maintain duty of care paperwork.
- Communication: Brief workforce; update RAMS; notify client/regulator if required.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-confined-space-entry",
  title: "Confined Space Entry (Manholes/Chambers)",
  fields: {
    title: "Confined Space Entry (Manholes/Chambers)",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Scope: Short-duration entry for inspection, benching or repairs.
- Assessment: Determine if confined space; avoid entry where possible (use remote means).
- Permit-to-work: Issue by competent person; define duration, controls and rescue arrangements.
- Controls: Gas test before and during entry; continuous ventilation; top man at all times; communications; retrieval system and rescue plan; trained entrants only.
- Emergency: Drill practiced; equipment inspected; records retained.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ms-setting-out",
  title: "Setting Out & Surveying",
  fields: {
    title: "Setting Out & Surveying",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Scope: Establish lines/levels for earthworks, drainage and structures.
- Controls: Calibrated instruments; control points protected and checked; method statements for working near live plant/excavations; night/poor light working with task lighting; data backups and as-builts submitted.`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "power-tools",
  title: "Power Tools",
  fields: {
    title: "Power Tools",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- Drills (110V)
- Angle grinders
- Reciprocating saws
- Impact drivers
- Extension leads and RCD protection`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "ppe",
  title: "Standard PPE Requirements",
  fields: {
    title: "Standard PPE Requirements",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `All personnel must wear appropriate Personal Protective Equipment (PPE) at all times while on site, including:
• Hard hat (to EN 397)
• High-visibility clothing (to EN ISO 20471)
• Safety footwear (to EN ISO 20345)
• Eye protection where required
• Hearing protection in designated areas
• Respiratory protection where specified in risk assessments`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "site-rules",
  title: "Site Safety Rules",
  fields: {
    title: "Site Safety Rules",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `• Site induction completed before work starts
• No work without approved method statement
• Report all accidents and near misses
• Emergency assembly point identified
• First aider present during all operations`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "site-setup",
  title: "Site Setup",
  fields: {
    title: "Site Setup",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `1. Establish secure site compound
2. Erect safety signage and barriers
3. Confirm utility locations
4. Set up welfare facilities
5. Brief all personnel on emergency procedures`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "quality-checks",
  title: "Quality Checks",
  fields: {
    title: "Quality Checks",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `• Daily inspections of equipment
• Material delivery checks
• Work quality reviews
• Environmental monitoring
• Documentation of all activities`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "excavation",
  title: "Excavation Equipment",
  fields: {
    title: "Excavation Equipment",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `- 13 Ton Digger
- 8 Ton Digger
- 5 Ton Digger
- 3 Ton Digger
- Vibrating Plate
- Hand tools`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "safety-equip",
  title: "Safety Equipment",
  fields: {
    title: "Safety Equipment",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `• First aid kit
• Fire extinguisher
• Emergency phone
• Barrier tape and signage
• Traffic management equipment`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},
{
  id: "quality-checks",
  title: "Quality Checks",
  fields: {
    title: "Quality Checks",
    equipment: "Hand tools / small plant suitable for task",
    ppe: "Hi-Vis, Hard Hat, Safety Boots, Gloves, Eye Protection",
    method: `• Daily inspections of equipment
  • Material delivery checks
  • Work quality reviews
  • Environmental monitoring
  • Documentation of all activities`,
    training: "Operatives to be trained/competent for task and plant used",
    risks: "Slips, trips, manual handling, impact injuries, contact with equipment/plant",
    associated: "Refer to relevant Risk Assessment and company safety procedures"
  }
},

    // small test snippet that populates all fields
    { id: "test-one",
      title: "Test One",
      fields: {
        title: "TEST ONE — Sample Title",
        equipment: "Sample equipment A\nSample equipment B",
        ppe: "Hard hat\nHi-vis vest\nSafety boots",
        method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect",
        training: "Site induction; Task briefing; Specific plant training",
        risks: "Slips/trips; Manual handling; Dust exposure",
        associated: "RA-TEST-001; RA-TEST-002"
      }
    }
    ,
    // 30 numbered test snippets added per user request
    { id: "1", title: "Test 1", fields: { title: "TEST 1 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "2", title: "Test 2", fields: { title: "TEST 2 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "3", title: "Test 3", fields: { title: "TEST 3 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "4", title: "Test 4", fields: { title: "TEST 4 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "5", title: "Test 5", fields: { title: "TEST 5 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "6", title: "Test 6", fields: { title: "TEST 6 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "7", title: "Test 7", fields: { title: "TEST 7 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "8", title: "Test 8", fields: { title: "TEST 8 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "9", title: "Test 9", fields: { title: "TEST 9 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "10", title: "Test 10", fields: { title: "TEST 10 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "11", title: "Test 11", fields: { title: "TEST 11 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "12", title: "Test 12", fields: { title: "TEST 12 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "13", title: "Test 13", fields: { title: "TEST 13 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "14", title: "Test 14", fields: { title: "TEST 14 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "15", title: "Test 15", fields: { title: "TEST 15 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "16", title: "Test 16", fields: { title: "TEST 16 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "17", title: "Test 17", fields: { title: "TEST 17 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "18", title: "Test 18", fields: { title: "TEST 18 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "19", title: "Test 19", fields: { title: "TEST 19 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "20", title: "Test 20", fields: { title: "TEST 20 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "21", title: "Test 21", fields: { title: "TEST 21 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "22", title: "Test 22", fields: { title: "TEST 22 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "23", title: "Test 23", fields: { title: "TEST 23 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "24", title: "Test 24", fields: { title: "TEST 24 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "25", title: "Test 25", fields: { title: "TEST 25 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "26", title: "Test 26", fields: { title: "TEST 26 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "27", title: "Test 27", fields: { title: "TEST 27 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "28", title: "Test 28", fields: { title: "TEST 28 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "29", title: "Test 29", fields: { title: "TEST 29 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } },
    { id: "30", title: "Test 30", fields: { title: "TEST 30 — Sample Title", equipment: "Sample equipment A\nSample equipment B", ppe: "Hard hat\nHi-vis vest\nSafety boots", method: "Step 1: Do X\nStep 2: Do Y\nStep 3: Inspect", training: "Site induction; Task briefing; Specific plant training", risks: "Slips/trips; Manual handling; Dust exposure", associated: "RA-TEST-001; RA-TEST-002" } }
  ]
};

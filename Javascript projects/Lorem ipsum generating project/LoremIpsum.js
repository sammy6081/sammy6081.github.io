const text = ["Delectus voluptas eaque veniam ut sequi cupiditate aliquam cum, tempora dolore rerum! Eius accusantium maxime reprehenderit nesciunt sunt non modi hic deleniti enim quidem, saepe cupiditate omnis ipsam amet nobis voluptate quia ex quisquam porro adipisci repellat! Dolore, harum qui. Ducimus libero totam voluptate recusandae dolorum illo consequatur minima itaque. Doloremque aperiam beatae, nemo facere ipsa maiores vel. Voluptate.",
"Ea reprehenderit debitis pariatur vitae sint eum placeat est maiores quae? Tempore voluptate autem temporibus nemo, fuga maiores, itaque odio laudantium aliquam minima labore doloremque. Laborum quidem distinctio asperiores eos fuga sapiente sint optio porro nulla! Voluptatibus, quaerat voluptate! Voluptate aliquam ullam atque ea explicabo quod tempore id ipsum, quidem incidunt porro adipisci, aspernatur earum fugit sapiente nisi quaerat dolorem nesciunt culpa. Quod sequi deleniti libero esse suscipit minima debitis tenetur possimus praesentium beatae unde temporibus, sit ratione dolorem saepe obcaecati labore hic asperiores, maiores porro laudantium eius rerum vel corrupti. Voluptatum minus magni dicta a blanditiis? Vitae, ratione. Ut dolorem numquam rem non quos eos nemo voluptates. Voluptatem recusandae saepe ea incidunt hic optio ut animi? Rem quasi laborum totam quis libero saepe doloremque voluptate, alias quidem quos sint.",
" Sunt molestiae excepturi harum obcaecati voluptatem amet. Id pariatur ducimus velit eveniet in, temporibus ullam ad tempore dolor, a fugit nemo rem omnis quod cum asperiores quas. Ab, deserunt accusamus. Enim ullam debitis nemo, nostrum officia quam. Dolore ullam perferendis a excepturi ducimus, aspernatur praesentium quam veritatis cumque dolores blanditiis corporis accusantium magni esse consequatur voluptatum numquam perspiciatis rerum maxime.",
"Architecto enim odit delectus totam quidem illum consequatur, voluptates sit neque amet? Recusandae, cumque impedit incidunt ipsa provident itaque. Nulla, enim eum animi dolor atque, vero assumenda asperiores aliquid dolore quasi accusamus rerum incidunt sequi. Maxime, nemo deleniti! Magni omnis, quidem necessitatibus et distinctio blanditiis illum eveniet eligendi delectus cumque esse aperiam quasi autem veritatis laborum excepturi quibusdam dolorum culpa odio quam tempora. Possimus nesciunt libero aliquid aperiam soluta, iure optio, quam tempora consectetur ducimus repellat inventore! Doloremque aperiam tempora maxime sequi voluptates, velit animi ducimus dicta iusto ratione assumenda officia id, consectetur vel nihil impedit.",
"Asperiores voluptatum eos ipsum minus? Quo veritatis nam quod at unde, tenetur, quam blanditiis sunt doloremque consequatur sed, non dolore modi tempore fugiat totam neque! Ratione numquam, cum molestiae obcaecati deleniti eius quidem ex incidunt dolor quasi eos iure? Ipsa ipsam quo quibusdam aliquid vitae consectetur nulla dolorem odio nisi provident! Iusto fugit cum similique beatae animi, in natus perferendis rem id vel dolorem nulla doloribus, consequuntur laudantium explicabo harum ullam odit odio sit labore cumque, tempora perspiciatis.",
" Rem veritatis ut rerum quis ex accusamus accusantium dignissimos error, magnam expedita provident tempora modi perferendis omnis facilis odio nostrum, itaque debitis dolores ea deleniti possimus culpa. Consectetur, quibusdam sed! Omnis explicabo dignissimos officiis temporibus ipsum excepturi facere molestias culpa iusto, alias dolores, provident ratione eaque totam deleniti ipsam delectus, cumque pariatur sequi aperiam corrupti aut harum adipisci? Ipsam excepturi saepe illo blanditiis necessitatibus a dolorum reprehenderit, soluta dolorem?",
"Voluptatibus vero modi enim inventore molestiae esse culpa rerum molestias dolore temporibus alias unde fugit optio doloribus, facere, adipisci laudantium sequi illo ad dolores magni. Tenetur odit sequi aut, nobis velit assumenda. Dolorem eveniet, consectetur voluptatibus nesciunt ut quaerat qui, voluptas, inventore nihil molestias laborum officia doloribus fugiat! Repudiandae sit, id facilis enim dolores doloremque? Vel at numquam sunt fugiat voluptatem exercitationem reiciendis quod cum obcaecati debitis! Ad tempore optio numquam voluptatibus sint ea quidem officiis nostrum voluptates praesentium, sed est blanditiis assumenda ducimus mollitia reiciendis totam, amet ratione ex ipsum iste! Quas adipisci tenetur similique nemo quaerat autem aliquam exercitationem commodi laboriosam assumenda officia atque, temporibus obcaecati sit odit eius?",
"Laborum aut perferendis ab unde numquam voluptatem obcaecati tenetur dolores, saepe, error consectetur fugiat excepturi voluptates? Doloremque deserunt accusantium cupiditate eaque delectus ullam beatae iure libero voluptas inventore quam, dolorum dolorem sit, deleniti nisi ducimus eos accusamus consequatur fuga dolores, molestiae ipsum.  Nihil obcaecati deleniti, delectus quos aliquam totam officiis numquam dolorum repudiandae, incidunt dicta? Doloremque, officiis dicta? Aliquam at laborum placeat inventore, veniam ullam aliquid illo dolorum doloremque cupiditate necessitatibus esse quae atque alias ab.",
"Nam nisi tempora ipsum at veniam eius officiis omnis porro, consequatur accusantium dolore harum dicta repudiandae quae expedita provident, asperiores quam debitis iste inventore magni saepe corporis qui sunt! Id nihil laborum earum doloremque cumque cupiditate reiciendis qui explicabo, placeat ipsum omnis dolores dolore iure ut distinctio impedit ratione aperiam quaerat quos architecto minus. Eligendi, ullam totam est dolore aliquid amet placeat quibusdam ipsum voluptatem, similique nemo consequatur quod dolorem pariatur? Rem tempora, adipisci sit temporibus doloribus ratione, explicabo molestias, mollitia aperiam quia praesentium sapiente voluptas soluta accusamus? Veniam quaerat repellat saepe distinctio."
];

const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random()*text.length);

    // if empty
    //  if <0
    //  if > 9
    if (isNaN(value) || value <= 0 || value > 9 ) {
        result.innerHTML = '<p class="result">'+ text[random] +'<p/>';

    }
    else{
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item){
            return '<p class="result">' + item + '<p/>';
        })
        
        .join("");
        result.innerHTML = tempText
    }
});
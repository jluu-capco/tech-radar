export interface techType {
  [k: string]: Array<{ name: string; link: string; enabled: boolean }>;
  preferred: Array<{ name: string; link: string; enabled: boolean }>;
  skilled: Array<{ name: string; link: string; enabled: boolean }>;
  scaling: Array<{ name: string; link: string; enabled: boolean }>;
}

export const data: Array<{ name: string; data: techType }> = [
  {
    name: "DevOps",
    data: {
      preferred: [
        {
          name: "GitHub",
          link: "https://img.icons8.com/fluent/452/github.png",
          enabled: false,
        },
        {
          name: "CircleCI",
          link: "https://img.icons8.com/color/452/circleci.png",
          enabled: false,
        },
        {
          name: "Terraform",
          link: "https://raw.githubusercontent.com/mauve/vscode-terraform/master/terraform.png",
          enabled: false,
        },
        {
          name: "Vault",
          link: "https://www.pngitem.com/pimgs/m/329-3299659_hashicorp-vault-logo-hd-png-download.png",
          enabled: false,
        },
        {
          name: "SonarQube",
          link: "https://pbs.twimg.com/profile_images/1224335491899760641/h404B5dU_400x400.jpg",
          enabled: true,
        },
        {
          name: "Elastic",
          link: "https://www.finsmes.com/wp-content/uploads/2019/06/elastic.png",
          enabled: false,
        },
      ],
      skilled: [
        {
          name: "Bitbucket",
          link: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_2ea5f7178028686921161d65d4be481a/bitbucket.png",
          enabled: false,
        },
        {
          name: "Jenkins",
          link: "https://avidlearnerinprogress.github.io/assets/images/tools/jenkins.jpg",
          enabled: true,
        },
        {
          name: "TeamCity",
          link: "https://cdn.worldvectorlogo.com/logos/teamcity-icon.svg",
          enabled: false,
        },
        {
          name: "Istio",
          link: "https://istio.io/latest/img/istio-bluelogo-whitebackground-unframed.svg",
          enabled: false,
        },
        {
          name: "Ansible",
          link: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ansible_Logo.png",
          enabled: false,
        },
        {
          name: "Packer",
          link: "https://seeklogo.com/images/P/packer-logo-732D5F5529-seeklogo.com.png",
          enabled: false,
        },
      ],
      scaling: [
        {
          name: "Twistlock",
          link: "https://symbols.getvecta.com/stencil_98/71_twistlock-icon.a467faf956.svg",
          enabled: false,
        },
        {
          name: "Kiali",
          link: "https://design.jboss.org/kiali/logo/final/PNG/kiali_icon_darkbkg_1280px.png",
          enabled: false,
        },
        {
          name: "ConcourseCl",
          link: "https://cdn.worldvectorlogo.com/logos/concourse-1.svg",
          enabled: false,
        },
        {
          name: "Consul",
          link: "https://d7umqicpi7263.cloudfront.net/img/product/4c3eb104-ebd1-42be-9bd4-de25ef6918df/84c590de-f853-4d50-a314-d92f104ec3a9.png",
          enabled: false,
        },
      ],
    },
  },
  {
    name: "Databases",
    data: {
      preferred: [
        {
          name: "Postgres",
          link: "https://img.icons8.com/color/452/postgreesql.png",
          enabled: true,
        },
        {
          name: "Neo4J",
          link: "https://dist.neo4j.com/wp-content/uploads/neo4j_logo_globe1.png",
          enabled: false,
        },
        {
          name: "MongoDB",
          link: "https://symbols.getvecta.com/stencil_88/103_mongodb.d91e0a5f7c.svg",
          enabled: true,
        },
      ],
      skilled: [
        {
          name: "MySQL",
          link: "https://symbols.getvecta.com/stencil_261/27_mysql.4e2ff8ff6c.svg",
          enabled: true,
        },
        {
          name: "Oracle",
          link: "https://img.icons8.com/color/452/oracle-logo.png",
          enabled: false,
        },
        {
          name: "SQL Server",
          link: "https://img.icons8.com/color/452/microsoft-sql-server.png",
          enabled: false,
        },
      ],
      scaling: [
        {
          name: "BigQuery",
          link: "https://www.intelligencepartner.com/wp-content/uploads/2017/05/bigdata_bigquery.png",
          enabled: false,
        },
        {
          name: "Snowflake",
          link: "https://avatars.githubusercontent.com/u/6453780?s=280&v=4",
          enabled: false,
        },
        {
          name: "Liquibase",
          link: "https://avatars.githubusercontent.com/u/438548?s=280&v=4",
          enabled: false,
        },
      ],
    },
  },
  {
    name: "Quality Engineering",
    data: {
      preferred: [
        {
          name: "Selenium",
          link: "https://static-00.iconduck.com/assets.00/selenium-icon-512x496-obrnvg2v.png",
          enabled: true,
        },
        {
          name: "Cucumber",
          link: "https://banner2.cleanpng.com/20180806/xkl/kisspng-cucumber-behavior-driven-development-software-test-cucumber-logo-svg-vector-amp-png-transparent-v-5b68353a7fad14.236653821533556026523.jpg",
          enabled: false,
        },
        {
          name: "Appium",
          link: "https://e7.pngegg.com/pngimages/366/527/png-clipart-appium-test-automation-software-testing-selenium-ios-logo-purple-violet.png",
          enabled: false,
        },
        {
          name: "REST Assured",
          link: "https://i2.wp.com/www.entrofi.net/wp-content/uploads/2020/01/rest-assured-logo.png?fit=400%2C400&ssl=1",
          enabled: false,
        },
        {
          name: "BrowserStack",
          link: "https://symbols.getvecta.com/stencil_75/145_browserstack-icon.21eace67de.svg",
          enabled: false,
        },
        {
          name: "Sauce Labs",
          link: "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/08/a480442d1aa1af938633df95f8e02bf6.jpeg",
          enabled: false,
        },
      ],
      skilled: [
        {
          name: "Wiremock",
          link: "https://www.saashub.com/images/app/service_logos/49/f7c4bb5006b5/large.png?1557747621",
          enabled: false,
        },
        {
          name: "Applitools",
          link: "https://www.nuget.org/profiles/applitools/avatar?imageSize=512",
          enabled: false,
        },
        {
          name: "JMeter",
          link: "https://svn.apache.org/repos/asf/jmeter/trunk/xdocs/images/asf-logo.svg",
          enabled: false,
        },
        {
          name: "Axe",
          link: "https://www.deque.com/wp-content/uploads/2018/03/DQ_SecondaryLogo_HeroBlue_RGB-1.png",
          enabled: false,
        },
        {
          name: "Cypress",
          link: "https://icons-for-free.com/iconfiles/png/512/cypress-1324440144114984250.png",
          enabled: false,
        },
      ],
      scaling: [
        {
          name: "Gatling",
          link: "https://assets-global.website-files.com/5dfb2c5f5b18187014b68b84/5e2e0ec72ca1f70c12148ea4_CR5gILun.png",
          enabled: false,
        },
        {
          name: "PACT",
          link: "https://pbs.twimg.com/profile_images/1326371726301798402/WxukgT47.png",
          enabled: false,
        },
      ],
    },
  },
  {
    name: "Cloud & Platforms",
    data: {
      preferred: [
        {
          name: "GCP",
          link: "https://img.icons8.com/color/452/google-cloud.png",
          enabled: false,
        },
        {
          name: "Kubernetes",
          link: "https://img.icons8.com/color/452/kubernetes.png",
          enabled: false,
        },
        {
          name: "Serverless",
          link: "https://getcommandeer.com/_nuxt/img/4a7600a.png",
          enabled: false,
        },
        {
          name: "OpenShift",
          link: "https://banner2.cleanpng.com/20181107/zw/kisspng-openshift-logo-red-hat-software-minishift-computer-5be36e7bd474f7.2753397215416316118702.jpg",
          enabled: false,
        },
        {
          name: "Grafana",
          link: "https://docs.checkmk.com/latest/images/grafana_logo.png",
          enabled: false,
        },
      ],
      skilled: [
        {
          name: "AWS",
          link: "https://img.icons8.com/color/452/amazon-web-services.png",
          enabled: true,
        },
        {
          name: "Azure",
          link: "https://img.icons8.com/color/452/azure-1.png",
          enabled: false,
        },
        {
          name: "PCF",
          link: "https://avatars.githubusercontent.com/u/5497370?s=200&v=4",
          enabled: false,
        },
      ],
      scaling: [
        {
          name: "Digital Ocean",
          link: "https://pbs.twimg.com/profile_images/1410636343944880136/w8dxKEmg_400x400.jpg",
          enabled: false,
        },
        {
          name: "PKS",
          link: "https://blogs.vmware.com/virtualblocks/files/2018/08/PKS-2.png",
          enabled: false,
        },
      ],
    },
  },
  {
    name: "Integration",
    data: {
      preferred: [
        {
          name: "Rest",
          link: "https://miro.medium.com/max/300/1*1RDFnS8FgAOQFegtuynxWw.png",
          enabled: false,
        },
        {
          name: "Camel",
          link: "https://camel.apache.org/_/img/logo-d.svg",
          enabled: false,
        },
        {
          name: "gRPC",
          link: "https://docs.konghq.com/assets/images/icons/hub/kong-inc_grpc-gateway.png",
          enabled: false,
        },
        {
          name: "Kafka",
          link: "https://e7.pngegg.com/pngimages/435/297/png-clipart-kafka-logo-icons-logos-emojis-tech-companies-thumbnail.png",
          enabled: false,
        },
      ],
      skilled: [
        {
          name: "ActiveMQ",
          link: "https://symbols.getvecta.com/stencil_73/17_activemq-icon.998ecace10.svg",
          enabled: false,
        },
        {
          name: "IBM MQ",
          link: "https://anypoint.mulesoft.com/exchange/organizations/68ef9520-24e9-4cf2-b2f5-620025690913/assets/com.mulesoft.connectors/mule-ibm-mq-connector/icon/svg/?sha=97c7ca8fde33f64f5da710f17de072de73f67b11",
          enabled: false,
        },
      ],
      scaling: [
        {
          name: "GraphQL",
          link: "https://i0.wp.com/storage.googleapis.com/blog-images-backup/1*rmWsDg6J6PtLVOhXb3zr7w.png",
          enabled: false,
        },
      ],
    },
  },
  {
    name: "Backend",
    data: {
      preferred: [
        {
          name: "Java",
          link: "https://img.icons8.com/color/452/java-coffee-cup-logo.png",
          enabled: true,
        },
        {
          name: "Node",
          link: "https://img.icons8.com/fluency/48/000000/node-js.png",
          enabled: true,
        },
        {
          name: "Go",
          link: "https://img.icons8.com/color/344/golang.png",
          enabled: false,
        },
        {
          name: "Scala",
          link: "https://www.scala-lang.org/resources/img/frontpage/scala-spiral.png",
          enabled: true,
        },
        {
          name: "Gradle",
          link: "https://gradle.org/images/gradle-knowledge-graph-logo.png?20170228",
          enabled: false,
        },
      ],
      skilled: [
        {
          name: "Python",
          link: "https://img.icons8.com/color/452/python.png",
          enabled: true,
        },
        {
          name: "Groovy",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Groovy-logo.svg/445px-Groovy-logo.svg.png",
          enabled: false,
        },
      ],
      scaling: [
        {
          name: "Kotlin",
          link: "https://img.icons8.com/color/344/kotlin.png",
          enabled: false,
        },
      ],
    },
  },
  {
    name: "Frontend",
    data: {
      preferred: [
        {
          name: "React",
          link: "https://img.icons8.com/color/452/react-native.png",
          enabled: true,
        },
        {
          name: "Angular",
          link: "https://img.icons8.com/color/452/angularjs.png",
          enabled: false,
        },
        {
          name: "TypeScript",
          link: "https://img.icons8.com/color/452/typescript.png",
          enabled: true,
        },
      ],
      skilled: [],
      scaling: [
        {
          name: "Flutter",
          link: "https://img.icons8.com/color/452/flutter.png",
          enabled: false,
        },
        {
          name: "Vue",
          link: "https://img.icons8.com/color/344/vue-js.png",
          enabled: false,
        },
      ],
    },
  },
  {
    name: "Mobile",
    data: {
      preferred: [
        {
          name: "React Native",
          link: "https://img.icons8.com/color/452/react-native.png",
          enabled: false,
        },
        {
          name: "Gradle Mobile",
          link: "https://gradle.org/images/gradle-knowledge-graph-logo.png?20170228",
          enabled: true,
        },
      ],
      skilled: [
        {
          name: "Swift",
          link: "https://img.icons8.com/fluent/452/swift.png",
          enabled: true,
        },
        {
          name: "Kotlin",
          link: "https://img.icons8.com/color/344/kotlin.png",
          enabled: false,
        },
        {
          name: "Java Mobile",
          link: "https://img.icons8.com/color/452/java-coffee-cup-logo.png",
          enabled: true,
        },
        {
          name: "Ionic",
          link: "https://img.icons8.com/ios-filled/452/ionic.png",
          enabled: true,
        },
      ],
      scaling: [
        {
          name: "Flutter",
          link: "https://img.icons8.com/color/452/flutter.png",
          enabled: true,
        },
      ],
    },
  },
];

export const icons: Array<{ name: string; link: string }> = [
  {
    name: "GitHub",
    link: "https://img.icons8.com/fluent/452/github.png",
  },
  {
    name: "CircleCI",
    link: "https://img.icons8.com/color/452/circleci.png",
  },
  {
    name: "Terraform",
    link: "https://raw.githubusercontent.com/mauve/vscode-terraform/master/terraform.png",
  },
  {
    name: "Vault",
    link: "https://miro.medium.com/max/1200/1*giyQTAngfrbaEkaJ277oxQ.png",
  },
  {
    name: "SonarQube",
    link: "https://pbs.twimg.com/profile_images/1224335491899760641/h404B5dU_400x400.jpg",
  },
  {
    name: "Elastic",
    link: "https://symbols.getvecta.com/stencil_79/34_elastic-search-icon.bdaf397325.svg",
  },
  {
    name: "Bitbucket",
    link: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_2ea5f7178028686921161d65d4be481a/bitbucket.png",
  },
  {
    name: "Jenkins",
    link: "https://symbols.getvecta.com/stencil_97/67_the-jenkins-project-icon.0141f64fe7.svg",
  },
  {
    name: "TeamCity",
    link: "https://cdn.worldvectorlogo.com/logos/teamcity-icon.svg",
  },
  {
    name: "Istio",
    link: "https://symbols.getvecta.com/stencil_84/70_istio-icon.9d92202138.svg",
  },
  {
    name: "Ansible",
    link: "https://symbols.getvecta.com/stencil_73/122_ansible-icon.e1db432c74.svg",
  },
  {
    name: "Packer",
    link: "https://symbols.getvecta.com/stencil_91/3_packer-icon.53584ee287.svg",
  },
  {
    name: "Twistlock",
    link: "https://symbols.getvecta.com/stencil_98/71_twistlock-icon.a467faf956.svg",
  },
  {
    name: "Kiali",
    link: "https://design.jboss.org/kiali/logo/final/PNG/kiali_icon_darkbkg_1280px.png",
  },
  {
    name: "ConcourseCl",
    link: "https://cdn.worldvectorlogo.com/logos/concourse-1.svg",
  },
  {
    name: "Consul",
    link: "https://symbols.getvecta.com/stencil_77/63_consul-icon.0452948395.svg",
  },
  {
    name: "Postgres",
    link: "https://img.icons8.com/color/452/postgreesql.png",
  },
  {
    name: "Neo4J",
    link: "https://symbols.getvecta.com/stencil_261/28_neo4j.404372b29e.svg",
  },
  {
    name: "MongoDB",
    link: "https://symbols.getvecta.com/stencil_88/103_mongodb.d91e0a5f7c.svg",
  },
  {
    name: "MySQL",
    link: "https://symbols.getvecta.com/stencil_261/27_mysql.4e2ff8ff6c.svg",
  },
  {
    name: "Oracle",
    link: "https://img.icons8.com/color/452/oracle-logo.png",
  },
  {
    name: "SQL Server",
    link: "https://img.icons8.com/color/452/microsoft-sql-server.png",
  },
  {
    name: "BigQuery",
    link: "https://www.intelligencepartner.com/wp-content/uploads/2017/05/bigdata_bigquery.png",
  },
  {
    name: "Snowflake",
    link: "https://avatars.githubusercontent.com/u/6453780?s=280&v=4",
  },
  {
    name: "Liquibase",
    link: "https://avatars.githubusercontent.com/u/438548?s=280&v=4",
  },
  {
    name: "Selenium",
    link: "https://static-00.iconduck.com/assets.00/selenium-icon-512x496-obrnvg2v.png",
  },
  {
    name: "Cucumber",
    link: "https://banner2.cleanpng.com/20180806/xkl/kisspng-cucumber-behavior-driven-development-software-test-cucumber-logo-svg-vector-amp-png-transparent-v-5b68353a7fad14.236653821533556026523.jpg",
  },
  {
    name: "Appium",
    link: "https://e7.pngegg.com/pngimages/366/527/png-clipart-appium-test-automation-software-testing-selenium-ios-logo-purple-violet.png",
  },
  {
    name: "REST Assured",
    link: "https://i2.wp.com/www.entrofi.net/wp-content/uploads/2020/01/rest-assured-logo.png?fit=400%2C400&ssl=1",
  },
  {
    name: "BrowserStack",
    link: "https://symbols.getvecta.com/stencil_75/145_browserstack-icon.21eace67de.svg",
  },
  {
    name: "Sauce Labs",
    link: "https://seeklogo.com/images/S/sauce-labs-logo-413E1BDE63-seeklogo.com.png",
  },
  {
    name: "Wiremock",
    link: "https://lh3.googleusercontent.com/proxy/TImAeIQiFveDA7nFR0i5Y9YgV7og9T5y3tjeaA4K_djJWQFPy7oKv1JAjX4MmZWSEy99drD1BlgHWHEkW22lY3IGtIqLpt6XVcJilOz0pA",
  },
  {
    name: "Applitools",
    link: "https://www.nuget.org/profiles/applitools/avatar?imageSize=512",
  },
  {
    name: "JMeter",
    link: "https://svn.apache.org/repos/asf/jmeter/trunk/xdocs/images/asf-logo.svg",
  },
  {
    name: "Axe",
    link: "https://www.deque.com/wp-content/uploads/2018/03/DQ_SecondaryLogo_HeroBlue_RGB-1.png",
  },
  {
    name: "Cypress",
    link: "https://icons-for-free.com/iconfiles/png/512/cypress-1324440144114984250.png",
  },
  {
    name: "Gatling",
    link: "https://assets-global.website-files.com/5dfb2c5f5b18187014b68b84/5e2e0ec72ca1f70c12148ea4_CR5gILun.png",
  },
  {
    name: "PACT",
    link: "https://pbs.twimg.com/profile_images/1326371726301798402/WxukgT47.png",
  },
  {
    name: "Kubernetes",
    link: "https://img.icons8.com/color/452/kubernetes.png",
  },
  {
    name: "Serverless",
    link: "https://symbols.getvecta.com/stencil_95/69_serverless-icon.b1abb9b824.svg",
  },
  {
    name: "OpenShift",
    link: "https://symbols.getvecta.com/stencil_90/47_openshift-icon.e98513fd69.svg",
  },
  {
    name: "PCF",
    link: "https://avatars.githubusercontent.com/u/5497370?s=200&v=4",
  },
  {
    name: "PKS",
    link: "https://blogs.vmware.com/virtualblocks/files/2018/08/PKS-2.png",
  },
  {
    name: "GCP",
    link: "https://img.icons8.com/color/452/google-cloud.png",
  },
  {
    name: "AWS",
    link: "https://img.icons8.com/color/452/amazon-web-services.png",
  },
  { name: "Azure", link: "https://img.icons8.com/color/452/azure-1.png" },
  {
    name: "Grafana",
    link: "https://docs.checkmk.com/latest/images/grafana_logo.png",
  },
  {
    name: "Digital Ocean",
    link: "https://symbols.getvecta.com/stencil_78/61_digital-ocean-icon.0d013f7d26.svg",
  },
  {
    name: "Rest",
    link: "https://miro.medium.com/max/300/1*1RDFnS8FgAOQFegtuynxWw.png",
  },
  { name: "Camel", link: "https://camel.apache.org/_/img/logo-d.svg" },
  {
    name: "gRPC",
    link: "https://docs.konghq.com/assets/images/icons/hub/kong-inc_grpc-gateway.png",
  },
  {
    name: "Kafka",
    link: "https://symbols.getvecta.com/stencil_74/14_apache-kafka-icon.59d5c11ca8.jpg",
  },
  {
    name: "ActiveMQ",
    link: "https://symbols.getvecta.com/stencil_73/17_activemq-icon.998ecace10.svg",
  },
  {
    name: "IBM MQ",
    link: "https://anypoint.mulesoft.com/exchange/organizations/68ef9520-24e9-4cf2-b2f5-620025690913/assets/com.mulesoft.connectors/mule-ibm-mq-connector/icon/svg/?sha=97c7ca8fde33f64f5da710f17de072de73f67b11",
  },
  {
    name: "GraphQL",
    link: "https://symbols.getvecta.com/stencil_82/66_graphql-icon.291fc05a38.svg",
  },
  {
    name: "Java",
    link: "https://img.icons8.com/color/452/java-coffee-cup-logo.png",
  },
  {
    name: "Node",
    link: "https://img.icons8.com/fluency/48/000000/node-js.png",
  },
  { name: "Go", link: "https://img.icons8.com/color/344/golang.png" },

  { name: "Python", link: "https://img.icons8.com/color/452/python.png" },
  {
    name: "Scala",
    link: "https://www.scala-lang.org/resources/img/frontpage/scala-spiral.png",
  },
  {
    name: "Gradle",
    link: "https://gradle.org/images/gradle-knowledge-graph-logo.png?20170228",
  },
  { name: "Kotlin", link: "https://img.icons8.com/color/344/kotlin.png" },
  {
    name: "React",
    link: "https://img.icons8.com/color/452/react-native.png",
  },
  {
    name: "Angular",
    link: "https://img.icons8.com/color/452/angularjs.png",
  },
  {
    name: "TypeScript",
    link: "https://img.icons8.com/color/452/typescript.png",
  },
  { name: "Vue", link: "https://img.icons8.com/color/344/vue-js.png" },
  {
    name: "React Native",
    link: "https://img.icons8.com/color/452/react-native.png",
  },
  { name: "Swift", link: "https://img.icons8.com/fluent/452/swift.png" },
  { name: "Kotlin", link: "https://img.icons8.com/color/344/kotlin.png" },
  {
    name: "Java Mobile",
    link: "https://img.icons8.com/color/452/java-coffee-cup-logo.png",
  },
  {
    name: "Ionic",
    link: "https://img.icons8.com/ios-filled/452/ionic.png",
  },
  {
    name: "Flutter",
    link: "https://img.icons8.com/color/452/flutter.png",
  },
  {
    name: "Gradle Mobile",
    link: "https://gradle.org/images/gradle-knowledge-graph-logo.png?20170228",
  },
];

export const technologies = [
  {
    categoryName: "DevOps",
    technologies: [
      "GitHub",
      "CircleCI",
      "Terraform",
      "Vault",
      "SonarQube",
      "Elastic",
      "Bitbucket",
      "Jenkins",
      "TeamCity",
      "Istio",
      "Ansible",
      "Packer",
      "Twistlock",
      "Kiali",
      "ConcourseCl",
      "Consul",
    ],
  },

  {
    categoryName: "Databases",
    technologies: [
      "Postgres",
      "Neo4J",
      "MongoDB",
      "MySQL",
      "Oracle",
      "SQL Server",
      "BigQuery",
      "Snowflake",
      "Liquibase",
    ],
  },
  {
    categoryName: "Quality Engineering",
    technologies: [
      "Selenium",
      "Cucumber",
      "Appium",
      "REST Assured",
      "BrowserStack",
      "Sauce Labs",
      "Wiremock",
      "Applitools",
      "JMeter",
      "Axe",
      "Cypress",
      "Gatling",
      "PACT",
    ],
  },
  {
    categoryName: "Cloud & Platforms",
    technologies: [
      "GCP",
      "AWS",
      "Azure",
      "Digital Ocean",
      "Kubernetes",
      "Serverless",
      "OpenShift",
      "PCF",
      "PKS",
      "Grafana",
    ],
  },
  {
    categoryName: "Integration",
    technologies: [
      "Rest",
      "Camel",
      "gRPC",
      "Kafka",
      "ActiveMQ",
      "IBM MQ",
      "GraphQL",
    ],
  },
  {
    categoryName: "Backend",
    technologies: [
      "Java",
      "Node",
      "Go",
      "Python",
      "Kotlin",
      "Scala",
      "Gradle",
      "Groovy",
    ],
  },
  {
    categoryName: "Frontend",
    technologies: ["React", "Angular", "Flutter", "Vue", "TypeScript"],
  },
  {
    categoryName: "Mobile",
    technologies: [
      "React Native",
      "Swift",
      "Kotlin",
      "Java Mobile",
      "Ionic",
      "Flutter",
      "Gradle Mobile",
    ],
  },
];

export const categoryList = [
  "Mobile",
  "Frontend",
  "Backend",
  "Integration",
  "Cloud & Platforms",
  "Quality Engineering",
  "Databases",
  "DevOps",
];

export const technologyList = [
  "GitHub",
  "CircleCI",
  "Terraform",
  "Vault",
  "SonarQube",
  "Elastic",
  "Bitbucket",
  "Jenkins",
  "TeamCity",
  "Istio",
  "Ansible",
  "Packer",
  "Twistlock",
  "Kiali",
  "ConcourseCl",
  "Consul",
  "Postgres",
  "Neo4J",
  "MongoDB",
  "MySQL",
  "Oracle",
  "SQL Server",
  "BigQuery",
  "Snowflake",
  "Selenium",
  "Cucumber",
  "Appium",
  "REST Assured",
  "BrowserStack",
  "Sauce Labs",
  "Wiremock",
  "Applitools",
  "JMeter ",
  "Axe",
  "Cypress",
  "Gatling",
  "PACT",
  "Kubernetes",
  "Serverless",
  "OpenShift",
  "PCF",
  "PKS",
  "GCP",
  "AWS",
  "Grafana",
  "Azure",
  "Digital Ocean",
  "Rest",
  "Camel",
  "gRPC",
  "Kafka",
  "ActiveMQ",
  "IBM MQ",
  "GraphQL",
  "Java",
  "Scala",
  "Node",
  "Go",
  "Python",
  "Kotlin",
  "React",
  "Angular",
  "Flutter",
  "Vue",
  "TypeScript",
  "React Native",
  "Swift",
  "Kotlin",
  "Java Mobile",
  "Ionic",
  "Flutter",
  "Gradle Mobile",
];

export const radarKeysText = {
  scaling:
    "The team are actively scaling the usage and skills for this technology or tool. These technologies are driven by both client demand and industry trends, therefore they are subject to change.",
  skilled:
    "If a client asked for these technologies Capco can confidently deliver production solutions using them.",
  preferred:
    "If Capco has full architecture and DevOps responsibility, these are the current technology choices.",
};
